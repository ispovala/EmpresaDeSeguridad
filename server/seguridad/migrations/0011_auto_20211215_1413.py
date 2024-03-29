# Generated by Django 3.2.9 on 2021-12-15 19:13

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('seguridad', '0010_arma_calibrearma_celular_modelocelular_operadoracelular'),
    ]

    operations = [
        migrations.CreateModel(
            name='Modelo',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(default='', max_length=255, verbose_name='nombre')),
                ('marca', models.ForeignKey(null=True, on_delete=django.db.models.deletion.RESTRICT, to='seguridad.marca', verbose_name='marca')),
            ],
            options={
                'db_table': 'modelo',
            },
        ),
        migrations.AddField(
            model_name='vehiculo',
            name='modelo',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.RESTRICT, to='seguridad.modelo', verbose_name='modelo'),
        ),
        migrations.AlterField(
            model_name='celular',
            name='modelo',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.RESTRICT, to='seguridad.modelo', verbose_name='modelo'),
        ),
        migrations.DeleteModel(
            name='ModeloCelular',
        ),
    ]
