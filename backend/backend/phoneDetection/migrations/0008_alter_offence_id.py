# Generated by Django 3.2.8 on 2021-10-10 13:26

from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    dependencies = [
        ('phoneDetection', '0007_alter_offence_trip'),
    ]

    operations = [
        migrations.AlterField(
            model_name='offence',
            name='id',
            field=models.UUIDField(default=uuid.uuid4, editable=False, unique=True),
        ),
    ]