# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Member',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('Type', models.IntegerField(default=1, null=True, verbose_name=b'\xe9\x83\xa8\xe9\x97\xa8', blank=True)),
                ('name', models.CharField(default=b'', max_length=100, null=True, verbose_name=b'\xe5\xa7\x93\xe5\x90\x8d', blank=True)),
                ('gender', models.CharField(default=b'\xe7\x94\xb7', max_length=10, null=True, verbose_name=b'\xe6\x80\xa7\xe5\x88\xab', blank=True)),
                ('email', models.CharField(default=b'', max_length=100, null=True, verbose_name=b'\xe9\x82\xae\xe7\xae\xb1', blank=True)),
                ('qq', models.CharField(default=b'', max_length=100, null=True, verbose_name=b'qq', blank=True)),
                ('github', models.CharField(default=b'', max_length=100, null=True, verbose_name=b'github', blank=True)),
                ('description', models.CharField(default=b'', max_length=500, null=True, verbose_name=b'desc', blank=True)),
            ],
        ),
    ]
