# Generated by Django 2.0 on 2017-12-05 16:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('learn', '0006_massage_user'),
    ]

    operations = [
        migrations.AddField(
            model_name='massage',
            name='foodid',
            field=models.IntegerField(default=1),
            preserve_default=False,
        ),
    ]
