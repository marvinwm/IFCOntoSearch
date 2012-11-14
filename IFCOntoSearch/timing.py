import solr
import urllib
import timeit
import httplib
def CalTime():
	#s = solr.SolrConnection('http://localhost:8080/solr')
	#response=s.query("test", rows=5,fields=['title','url','content'],highlight=True)
	parsedQuery=urllib.urlopen("http://127.0.0.1:8080/QParserRest/resources/Parse/ceiling").read()
	#urllib.urlopen("http://www.baidu.com").read()
	#conn=httplib.HTTPConnection("localhost:8080")
	#conn.request("GET","/QParserRest/resources/Parse/door")
	
t1=timeit.Timer("CalTime()","from __main__ import CalTime")
print t1.timeit(1)

