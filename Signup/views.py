#coding=utf-8
from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse, HttpResponseRedirect
from django.views.decorators.csrf import csrf_exempt
from django.core.urlresolvers import reverse
from django.core.paginator import *
import django.utils.timezone
import datetime
from Signup.models import *

def index(request):
    request.session['current_path'] = request.path
    return render(request, 'Signup/index.html')
    pass

@csrf_exempt
def register(request):
    request.session['current_path'] = request.path
    # request.session['current_path'] = request.path
    if request.method == 'GET':
        return render(request, 'Signup/register.html')
    else:
        # print 'in this func'
        # for k,v in request.POST.items():
        #     print k, v
        member = Member()
        member.Type = request.POST['type']
        member.name = request.POST['_name']
        member.gender = request.POST['_sex']
        member.email = request.POST['_email']
        member.qq = request.POST['_qq']
        member.github = request.POST['_git']
        # member.description = request.POST['_intr']
        print member.Type
        # print member.name
        # print member.gender
        # print member.email
        # print member.qq
        # print member.github
        # print member.description
        try:
            member.save()
            return HttpResponse( str(member.Type) )
            #return HttpResponseRedirect(request.session['current_path'])
            #info = {''}
            #return render(request, 'Signup/rigster.html')
        except:
            return  HttpResponse( str(0) )
            #return HttpResponse('不能重复报名!')
            pass


def more(request):
    request.session['current_path'] = request.path
    return render(request, 'Signup/Introduce.html')
    pass