from django.contrib import admin

# Register your models here.
from learn import models
admin.site.register(models.Massage)
admin.site.register(models.Dish)