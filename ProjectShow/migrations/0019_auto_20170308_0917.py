# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('ProjectShow', '0018_auto_20161011_0306'),
    ]

    operations = [
        migrations.AlterField(
            model_name='project',
            name='members',
            field=models.ManyToManyField(related_name='member_project_set', verbose_name=b'\xe6\x88\x90\xe5\x91\x98', to='User.User'),
        ),
    ]
