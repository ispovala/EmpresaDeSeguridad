# Generated by Django 3.2.9 on 2021-11-28 06:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('seguridad', '0012_auto_20211128_0142'),
    ]

    operations = [
        migrations.AlterField(
            model_name='persona',
            name='fecha_nacimiento',
            field=models.DateField(null=True, verbose_name='fecha_nacimiento'),
        ),
    ]
