# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('Course', '0002_remove_course_top'),
    ]

    operations = [
        migrations.AddField(
            model_name='course',
            name='reading_quantity',
            field=models.IntegerField(default=0, verbose_name=b'\xe9\x98\x85\xe8\xaf\xbb\xe9\x87\x8f', blank=True),
        ),
    ]
