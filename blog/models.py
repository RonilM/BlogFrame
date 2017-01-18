from __future__ import unicode_literals

from django.db import models

# Create your models here.
class Article(models.Model):
	title = models.CharField(max_length=100)
	article = models.TextField()
	author = models.CharField(max_length=100)
	created = models.DateField()
	last_updated = models.DateTimeField(auto_now = True)

