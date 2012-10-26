#coding=utf-8
from django.shortcuts import render_to_response
import solr
s = solr.SolrConnection('http://localhost:8080/solr')
response = s.query("*:*", rows=5,debugQuery='true')
results=response.results
results.extend(response.debug)
def index(request):
	return render_to_response('browse.html',{'results':results})
