# Generated by Django 3.2.8 on 2021-10-09 18:05

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('phoneDetection', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='trip',
            old_name='statusOfTrip',
            new_name='status',
        ),
    ]
