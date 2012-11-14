#coding=utf-8
from django.shortcuts import render_to_response
import solr
import urllib
# form a node according to the parameters
def GetNode(name,group,weight):
	shortname=""
	if len(name)>8:
		shortname=name[:8]+".."
	else:
		shortname=name
	weight=name+"(wg:"+str(weight)+")"
	term="{'name':'"+shortname+"','group':"+str(group)+",'wg':'"+str(weight)+"',"
	if group==0:
		term=term+"'size':50}"
	elif group==1:
		term=term+"'size':30}"
	elif group==2:
		term=term+"'size':20}"
	elif group==3:
		term=term+"'size':10}"
	elif group==4:
		term=term+"'size':8}"
	return term
# form a link likewise
def GetLink(source,target,value):
	term="{'source':"+str(source)+",'target':"+str(target)+",'value':"+str(value)+"}"
	return term

def index(request):
	#print GetNode("testName",2,1.55)
	#print GetLink(1,3,1.5)
	path=request.get_full_path()
	strQuery="Not set"
	results=dict()
	if request.GET.has_key('q'):
		strQuery=request.GET['q']

		page=1
		if request.GET.has_key('page'):
			page=int(request.GET['page'])
		# form the strOption
		strOption=""
		if request.GET.has_key('hyponym'):
			hpo=1
		else:
			hpo=0
		if request.GET.has_key('hypernym'):
			hpr=1
		else:
			hpr=0
		#
		if request.GET.has_key('dep'):
			dep=int(request.GET['dep'])
		else:
			dep=0
		strOption=str(hpo)+str(hpr)+"0"+str(dep)
		if strOption=="0000":
			strOption="1102"
			hpo=1
			hpr=1
			dep=2

		# expanded query string
		parsedQuery=urllib.urlopen("http://127.0.0.1:8080/QParserRest/resources/Parse/"+strQuery+"--"+strOption).read()
		#print parsedQuery

		# page info
		limit=10
		start=(page-1)*limit+1
		pageP=page-1
		pageN=page+1

		# connect solr server
		s = solr.SolrConnection('http://127.0.0.1:8080/solr')
		response=s.query(parsedQuery, start=start,rows=limit,fields=['title','url','content'],highlight=True)
		results=response.results
		#print results
		
		# query info
		total=response.numFound
		totalPage=total/limit+1
		end=min(page*limit,total)

		# limit=10
		# total = int resultsnumFound;
		# $start = ($page-1)*$limit+1;
		# $end = min($page*$limit, $total);
		# $totalPage=(int)($total/$limit+1);

		# deal with highlighting
		dicHigh=response.highlighting
		for dic in results:
			valHtitle=dicHigh.get(dic['url']).get('title')
			valHcontent=dicHigh.get(dic['url']).get('content')
			if valHtitle!=None:
				dic['htitle']=valHtitle[0]
			else:
				dic['htitle']=dic.get('title')
			if valHcontent!=None:
				dic['hcontent']=valHcontent[0]
			else:
				dic['hcontent']=dic.get('content')

		# rearrange data for navi module
		words=parsedQuery.split(" ")
		#print words
		#
		flag=0
		wordType=0

		dataNodes="["
		dataLinks="["
		count1=0
		count2=0
		count=0
		for word in words:
			if count<10:
				pos=word.find("^")
				if pos!=-1:
					realWord=word[:pos]
					weight=word[pos+1:]
					# change wordType
					if weight=="0.01":
						if realWord=="WMDS":
							wordType=0
							flag=0
						elif realWord=="WMUS":
							wordType=1
							flag=0
						elif realWord=="WMDFst":
							wordType=0
							flag=1
						elif realWord=="WMUFst":
							wordType=1
							flag=2
						elif realWord=="WMDSnd":
							wordType=0
							flag=2
						elif realWord=="WMUSnd":
							wordType=1
							flag=3
						elif realWord=="WMDDpr":
							wordType=0
							flag=3
						elif realWord=="WMUDpr":
							wordType=1
							flag=4
					else:
						
						# center
						if count==0:
							dataNodes=dataNodes+GetNode(realWord,0,weight)
						else:
							dataNodes=dataNodes+GetNode(realWord,flag,weight)
							dataLinks=dataLinks+GetLink(0,count,100/flag)
							dataLinks=dataLinks+","
						dataNodes=dataNodes+","
						if wordType==0:
							count1=count1+1
						elif wordType==1:
							count2=count2+1
						count=count1+count2
		dataNodes=dataNodes[:-1]
		dataNodes=dataNodes+"]"
		dataLinks=dataLinks[:-1]
		dataLinks=dataLinks+"]"
		print "count=="+str(count)
		if count==0:
			dataNodes="[]"
			dataLinks="[]"
		elif count==1:
			dataLinks="[]"	
		#print dataNodes
		#print dataLinks	
						
	print strQuery
	return render_to_response('browse.html',{'results':results,'dataNodes':dataNodes,'dataLinks':dataLinks,'dep':dep,'hpo':hpo,'hpr':hpr,'query':strQuery,'page':page,'total':total,'start':start,'end':end,'totalPage':totalPage,'pageP':pageP,'pageN':pageN,'path':path})