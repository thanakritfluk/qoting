# Generated by Django 2.1.2 on 2018-10-25 13:49

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('qoting_app', '0008_auto_20181023_1546'),
    ]

    operations = [
        migrations.DeleteModel(
            name='Question',
        ),
        migrations.DeleteModel(
            name='UserDetail',
        ),
    ]
