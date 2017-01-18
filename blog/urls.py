from django.conf.urls import url
from . import views

urlpatterns = [
	url(r'^$',views.index, name = 'index'),
	url(r'^savearticle/$',views.save_article, name='save_article'),
	url(r'^getarticles/$',views.get_articles, name='get_article')
]