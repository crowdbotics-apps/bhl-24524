# Generated by Django 2.2.18 on 2021-02-14 18:59

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ("users", "0002_auto_20210214_1716"),
    ]

    operations = [
        migrations.RemoveField(
            model_name="user",
            name="group",
        ),
    ]
