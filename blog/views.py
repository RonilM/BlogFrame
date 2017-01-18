from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader

# Create your views here.

def index(request):
	template = loader.get_template('blog/index.html')

	return HttpResponse(template.render({},request))

def save_article(request):
	if request.method == 'POST':
		params = request.POST
		print(params)

def get_articles(request):
	retval = [
		{"title": "title1","id":"#test1"},
		{"title": "title2","id":"#test2"}
	]
	return json.dumps(retval)
	