# -*- coding:utf-8 -*-
from django.db import models
from SystemArticle.models import Column, Article
from django.utils.encoding import python_2_unicode_compatible
from django.core.urlresolvers import reverse
import datetime
# Create your models here.

# the same models of SystemArticle
@python_2_unicode_compatible
class Course(models.Model):
    cover = models.ImageField('封面图片', upload_to = './course/', default = '/static/base/img/picture/JS.jpg')
    column = models.ForeignKey(Column, verbose_name = '栏目', null = True)
    title = models.CharField('标题', max_length = 100)
    course_intro = models.TextField('课程概述', default = '概述')
    time = models.DateTimeField('时间', editable = True, null = True)
    place = models.CharField('地点', max_length = 100, default = '地点')

    #content = models.TextField('内容')
    reading_quantity = models.IntegerField('阅读量', default=0, blank=True)
    #collection = models.ManyToManyField(User, related_name='article_collection', default=True, blank=True)
    #top = models.BooleanField('置顶', default=False, blank=True)
    #top_time = models.DateTimeField('置顶时间', editable=True, default=datetime.datetime.now)  # for thr ordering of the top items

    def __str__(self):
        return self.title
    def get_absolute_url(self):
        return reverse('Course_course', args = [self.id])
    class Meta:
        verbose_name = '课程'
        verbose_name_plural = '课程'
        #ordering = ['-top', '-top_time']
