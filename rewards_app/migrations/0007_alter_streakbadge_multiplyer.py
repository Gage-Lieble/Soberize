# Generated by Django 4.1.6 on 2023-02-14 05:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('rewards_app', '0006_alter_streakbadge_multiplyer_alter_streakbadge_weeks'),
    ]

    operations = [
        migrations.AlterField(
            model_name='streakbadge',
            name='multiplyer',
            field=models.FloatField(default=1),
        ),
    ]
