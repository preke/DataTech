# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('User', '0008_user_head_image'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='xuehao',
            field=models.CharField(default=b'99999', max_length=100, verbose_name=b'\xe5\xad\xa6\xe5\x8f\xb7'),
        ),
    ]
