#-*- coding:utf-8 -*-
from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect
from django.template import RequestContext
from django.views.decorators.csrf import csrf_exempt
from django.core.urlresolvers import reverse
from SystemArticle.models import Article, Column
from Course.models import Course
from django.core.paginator import *
import datetime
# Create your views here.

def index(request):
        request.session['current_path'] = request.path
    #try:
        course_list = Course.objects.all()
        hotest_list = course_list.order_by('-reading_quantity')  # 按阅读量排序
        if len(hotest_list)>6:
            hotest_list = hotest_list[0:6]
        else:
            pass
        paginator = Paginator(course_list, 7)  # 一页七篇文章
        page = request.GET.get('page', 1)  # url后如果没有查询集 ?page=.., 则page=1
        try:
            page_course = paginator.page(page)
        except PageNotAnInteger:
            page_course = paginator.page(1)
        except EmptyPage:
            page_course = paginator.page(paginator.num_pages)
        info = {'page_course':page_course, 'paginator':paginator, 'hotest_list':hotest_list }
        # print len(page_course.object_list)
        # print 'len'
        # print len(hotest_list)
        return render(request, 'Course/index.html', info)

    #except:
    #    return HttpResponse('error')

@csrf_exempt
def write_course(request):
    column_list = Column.objects.filter(category = 'CC')
    info = {'column_list':column_list}
    if request.method == 'GET':
        return render(request, 'Course/write_course.html', info)
    else: # POST
        cover        = request.FILES.get('cover_image', False)
        print cover
        column_name  = request.POST['column_name']
        title        = request.POST['title']
        course_intro = request.POST['course_intro']
        place        = request.POST['place']

        course = Course()
        if cover:
            course.cover = cover
        course.column = Column.objects.get(column_name = column_name)
        course.title, course.course_intro = title, course_intro
        course.time = datetime.datetime.now()
        course.save()
        return HttpResponseRedirect(reverse('Course_index'))

def course(request, course_id):
    request.session['current_path'] = request.path
    try:
        course = Course.objects.get(pk = course_id)
        course_list = Course.objects.all()
        hotest_list = course_list.order_by('-reading_quantity')  #
        if len(hotest_list) > 6:
            hotest_list = hotest_list[0:6]
        else:
            pass

        course.reading_quantity += 1
        course.save()
        info = {'course': course, 'hotest_list':hotest_list}
        return render(request, 'Course/course_detail.html', info)

    except:
        return HttpResponse('error')

@csrf_exempt
def preview(request):
    return HttpResponse('预览')
