#coding=utf-8
from django.db import models

# Create your models here.
from django.db import models
from django.utils.encoding import python_2_unicode_compatible
import hashlib

@python_2_unicode_compatible
class Member(models.Model):
    Type = models.IntegerField('部门', default=1, blank=True, null=True)
    name = models.CharField('姓名', max_length=100, default='', blank=True, null=True)
    gender = models.CharField('性别', max_length=10, default='男', blank=True, null=True)
    email = models.CharField('邮箱', max_length=100, default='', blank=True, null=True)
    qq = models.CharField('qq', max_length=100, default='', blank=True, null=True)
    github = models.CharField('github', max_length=100, default='', blank=True, null=True)
    description = models.CharField('desc', max_length=500, default='', blank=True, null=True)

    def __unicode__(self):
        return self.name

    def __str__(self):
        return self.name
