#coding = utf-8
# 'django.middleware.csrf.CsrfViewMiddleware',
import json
from django.shortcuts import redirect
from django.shortcuts import render,render_to_response
from django.http import HttpResponse
from django import forms
from django.forms import ModelForm 
from django.contrib import auth
from django.contrib.auth.models import User
from learn.models import Massage,Dish,Img
from django.views.decorators.csrf import csrf_exempt
from django.core.serializers import serialize,deserialize
from django.db.models.query import QuerySet
from dss.Serializer import serializer
@csrf_exempt
# Create your views here.

# class MassageForm(forms.Form):
#     massage = forms.CharField(label='评论',max_length=50)

@csrf_exempt
def index(request):
    if request.method == 'GET':
        return HttpResponse(json.dumps('hai mei dengZ'))
        massageform = MassageForm()
        return render_to_response('index.html',{'massageform':massageform})
    else:
        req = json.loads(request.body)
        if request.user.is_authenticated:
            text = req['text']
        # print(request.user.username)
            user = request.user.username

            Massage.objects.create(user = user, text = text,foodid = 1)
            return HttpResponse(json.dumps('post success!'),content_type="application/json")
        else:
            return HttpResponse(json.dumps('please login first!'))

@csrf_exempt
def regist(request):
    if request.method == 'POST':
        req = json.loads(request.body)
        username = req['username']
        password = req['password']
        user = User()
        user.username = username
        user.set_password(password)
        user.save()
        return HttpResponse(json.dumps('regist success'))
    return HttpResponse(json.dumps('something error!'))
@csrf_exempt
def login(request):
    if request.method == 'POST':
        data = {}
        req = json.loads(request.body)
        username = req['username']
        password = req['password']
        user = auth.authenticate(username=username,password=password)
        if user:
            data['username'] = username
            data['massage'] = 'login success'
            auth.login(request,user)
        else:
            data['massage'] = '用户名或密码错误,请重新登录'
        return HttpResponse(json.dumps(data))

def showmassage(request,foodid):
    if request.method == 'GET':
        list = Massage.objects.filter(foodid = foodid)
        data = serializer(list,datetime_format = 'string', output_type = 'json')
        return HttpResponse(data,content_type = "application/json")

def showdish(request,floor):
    if request.method == 'GET':
        print(floor)
        list = Dish.objects.filter(floor = floor)
        data = serializer(list,output_type = 'json')
        return HttpResponse(data,content_type = "application/json")
    # if request.method == 'POST':
    #     pass
    #     ##add dishmasheg

def getloginuser(request):
    if request.method == 'GET':
        if request.user.is_authenticated:
            return HttpResponse(json.dumps(request.user.username))
        else :
            return HttpResponse(json.dumps(""))


class ImgForm(forms.Form):
    massage = forms.FileField(label='评论',max_length=50)
    class Meta:  
        model=Img

@csrf_exempt
def img(request):
    return render_to_response('1.html',{'form': ImgForm})
# class ImgForm(ModelForm):  
#     class Meta:  
#         model=Img  

# #views.py  
# @csrf_exempt   
# def add(request):  
#     if request.method == 'POST':  
#         form = ImgForm(request.POST,request.FILES)  
#         if form.is_valid():  
#             form.save()  
#     else:  
#         form = ImgForm()  
#     return render_to_response('add.html', {'form': form})  
  
  
# def list(request):  
#     template_var={}  
#     photos=Img.objects.all()  
#     template_var['pics']=photos  
#     return render_to_response('list.html',template_var,  
#                        context_instance=RequestContext(request)) 