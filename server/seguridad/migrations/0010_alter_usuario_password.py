# Generated by Django 3.2.9 on 2021-11-28 06:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('seguridad', '0009_auto_20211128_0129'),
    ]

    operations = [
        migrations.AlterField(
            model_name='usuario',
            name='password',
            field=models.CharField(max_length=255, verbose_name='password'),
        ),
    ]
