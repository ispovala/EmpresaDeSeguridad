# Generated by Django 3.2.9 on 2021-11-26 19:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('seguridad', '0002_alter_rol_options'),
    ]

    operations = [
        migrations.CreateModel(
            name='CandadoSatelital',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('marca', models.CharField(default='', max_length=255, verbose_name='marca')),
                ('tipo', models.CharField(default='', max_length=255, verbose_name='tipo')),
                ('color', models.CharField(default='', max_length=255, verbose_name='color')),
            ],
            options={
                'db_table': 'candadosatelital',
            },
        ),
        migrations.CreateModel(
            name='Vehiculo',
            fields=[
                ('placa', models.CharField(default='', max_length=255, primary_key=True, serialize=False, verbose_name='placa')),
                ('motor', models.CharField(default='', max_length=255, verbose_name='motor')),
                ('marca', models.CharField(default='', max_length=255, verbose_name='marca')),
                ('tipo', models.CharField(default='', max_length=255, verbose_name='tipo')),
                ('color', models.CharField(default='', max_length=255, verbose_name='color')),
                ('year', models.DateField(verbose_name='year')),
            ],
            options={
                'db_table': 'vehiculo',
            },
        ),
    ]
