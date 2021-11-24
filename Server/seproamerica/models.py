from django.db import models
from django.db.models.deletion import PROTECT
from django.db.models.fields import DateTimeField

# Create your models here.

class Rol(models.Model):
    nombre=models.CharField(verbose_name='nombre', max_length=255, null=False)
    estado=models.SmallIntegerField(verbose_name="estado", default='1')
    class Meta:
        db_table = 'rols'

class Cargo(models.Model):
    nombre=models.CharField(verbose_name='nombre', max_length=255, null=False)
    estado=models.SmallIntegerField(verbose_name="estado", default='1')
    class Meta:
    	db_table = 'cargos'

class Usuario(models.Model):
    cedula=models.CharField(verbose_name="cedula", max_length=15, null=False)
    rol=models.ForeignKey(Rol, verbose_name="rol", null=False, on_delete=PROTECT)
    estado=models.SmallIntegerField(verbose_name="estado", default='1')
    username=models.CharField(verbose_name='username', max_length=255, null=False)
    contrasena=models.CharField(verbose_name='contrasena', max_length=100,null=False)
    created_by=models.BigIntegerField(verbose_name='created_by')
    created_at=models.DateTimeField(auto_now_add=True)
    updated_by=models.BigIntegerField(verbose_name='created_by', null=True)
    updated_at=models.DateTimeField(null=True)
    class Meta:
        db_table = 'usuarios'

class Persona(models.Model):
    nombres=models.CharField(verbose_name="nombres", max_length=255, null=False)
    apellidos=models.CharField(verbose_name="apellidos", max_length=255, null=False)
    cedula=models.CharField(verbose_name="cedula", max_length=15, null=False)
    celular=models.CharField(verbose_name="cedula", max_length=15, null=False, default='')
    fecha_nacimiento=models.DateField(verbose_name="fecha_nacimiento", null=False)
    direccion=models.CharField(verbose_name="direccion", max_length=500, null=False, default='')
    estado=models.SmallIntegerField(verbose_name="estado", default='1')
    created_by=models.BigIntegerField(verbose_name='created_by')
    created_at=models.DateTimeField(auto_now_add=True)
    updated_by=models.BigIntegerField(verbose_name='created_by', null=True)
    updated_at=models.DateTimeField(null=True)
    usuario=models.ForeignKey(Usuario, verbose_name="usuario", null=True, on_delete=PROTECT)
    profesion=models.CharField(verbose_name='profesion', null=True, max_length=255)
    cargo=models.ForeignKey(Cargo, verbose_name='cargo', null=False, on_delete=PROTECT)
    class Meta:
        db_table = 'personas'
