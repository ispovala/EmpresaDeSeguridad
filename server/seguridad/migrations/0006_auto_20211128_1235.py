# Generated by Django 3.2.9 on 2021-11-28 17:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('seguridad', '0005_alter_vehiculo_year'),
    ]

    operations = [
        migrations.AddField(
            model_name='usuario',
            name='armamento',
            field=models.BooleanField(default=False, verbose_name='armamento'),
        ),
        migrations.AddField(
            model_name='usuario',
            name='conduccion',
            field=models.BooleanField(default=False, verbose_name='conduccion'),
        ),
        migrations.AlterField(
            model_name='persona',
            name='fecha_nacimiento',
            field=models.DateField(null=True, verbose_name='fecha_nacimiento'),
        ),
    ]