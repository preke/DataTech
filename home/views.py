from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect
from django.views.decorators.csrf import csrf_exempt

from User.models import User
from django.core.urlresolvers import reverse
from SystemArticle.models import Article, Column
from Course.models import Course
from ProjectShow.models import Project


def home(request):
    request.session['current_path'] = request.path
    # info = {'is_log_in': True, 'request':request}
    # if request.session.get('user_name', False) == False:
    #     info['is_log_in'] = False
    course_list = Course.objects.order_by('-reading_quantity')[:5]
    # print course_list
    SystemArticle_list = Article.objects.filter(category = 'SA')[:8]
    project_list = Project.objects.all()
    info = {'course_list':course_list, 'SystemArticle_list':SystemArticle_list, 'project_list':project_list}
    return render(request, 'home/home.html', info)

# # by the GET method get the queryset option_url_name=.....
# def root_process(request):
#     option_url_name = request.GET.get('option_url_name', 'home')
#     return HttpResponseRedirect(reverse(option_url_name))    # go to the edit views such as writing


def personal_homepage(request):
    # if not request.session.user_name:
    #     return HttpResponse('Error')
    #try:
        user_name = request.session['user_name']
        user = User.objects.get(user_name = user_name)
        # user information, the project the principal of which is the user,and the member of which is the user
        finished_project_of_principal = Project.objects.filter(principal=user).exclude(status=0)
        unfinished_project_of_principal = Project.objects.filter(principal=user).filter(status=0)
        # project_of_member = Project.objects.filter( = )
        info = {'finished_projects':finished_project_of_principal, 'unfinished_projects':unfinished_project_of_principal}
        return render(request, 'home/personal_homepage.html', info)
    #except:
    #    return HttpResponse('error')


@csrf_exempt
def fuzzy_search(request):
    # article_title, project_name,
    search_item = request.POST['search_item']
    article_list = Article.objects.filter(title__contains = search_item)
    project_list = Project.objects.filter(project_name__contains = search_item)
    info = {'article_list':article_list, 'project_list':project_list}
    return render(request, 'home/fuzzy_search.html', info)

