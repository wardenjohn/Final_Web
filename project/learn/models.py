from django.db import models
import  django.utils.timezone as timezone
# Create your models here.
class Massage(models.Model):
	text = models.CharField(max_length = 200)
	time = models.DateTimeField('posttime',default = timezone.now)
	user = models.CharField(max_length = 50)
	foodid = models.IntegerField()
	def __str__(self):
		return self.text


class Dish(models.Model):
	floor = models.IntegerField()
	foodname = models.CharField(max_length = 30)
	price = models.IntegerField()
	description = models.CharField(max_length = 200)
	def __str__(self):
		return self.foodname

# class Img(models.Model):
# 	img = models.FileField(upload_to='./upload/')

class Img(models.Model):
	headImg = models.FileField(upload_to='./upload/')
