# Generated by Django 4.1.6 on 2023-02-09 04:08

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user_app', '0004_rename_date_day_day_remove_day_result_day_activity'),
    ]

    operations = [
        migrations.AlterField(
            model_name='day',
            name='day',
            field=models.DateField(blank=True, default=datetime.datetime.now),
        ),
    ]
