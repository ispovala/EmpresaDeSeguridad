# from re import DEBUG
from django.contrib.auth.models import AbstractUser
from django.db import models
from datetime import date


class Cargo(models.Model):
    nombre = models.CharField(verbose_name="nombre", max_length=255, default='')
    estado = models.CharField(verbose_name="estado", max_length=255, default='')

    class Meta:
        db_table = 'cargo'


class Persona(models.Model):
    nombres = models.CharField(verbose_name="nombres", max_length=255, default='')
    apellidos = models.CharField(verbose_name="apellidos", max_length=255, default='')
    cedula = models.CharField(verbose_name="cedula", max_length=10, default='')
    celular = models.CharField(verbose_name="celular", max_length=255, default='')
    fecha_nacimiento = models.DateField(verbose_name="fecha_nacimiento", null=True)
    direccion = models.CharField(verbose_name="direccion", max_length=255, default='')
    estado = models.CharField(verbose_name="estado", max_length=255, default='')
    fecha_creacion = models.DateTimeField(verbose_name="fecha_creacion", null=True)
    fecha_modificacion = models.DateTimeField(verbose_name="fecha_modificacion", null=True)
    userid = models.IntegerField(verbose_name="userid", null=True)
    cargo = models.ForeignKey(Cargo, verbose_name="cargo", null=True, on_delete=models.RESTRICT)
    profesion = models.CharField(verbose_name="profesion", max_length=255, default='')

    class Meta:
        db_table = 'persona'


class Tarjeta(models.Model):
    personaid = models.ForeignKey(Persona, verbose_name="personaid", null=True, on_delete=models.RESTRICT)
    nombres_propietario = models.CharField(verbose_name="nombres_propietario", max_length=255, default='')
    apellidos_propietario = models.CharField(verbose_name="apellidos_propietario", max_length=255, default='')
    fecha_vencimiento = models.DateTimeField(verbose_name="fecha_vencimiento", null=True)

    class Meta:
        db_table = 'tarjeta'


class Rol(models.Model):
    nombre = models.CharField(verbose_name="nombre", max_length=255, default='')
    estado = models.CharField(verbose_name="estado", max_length=255, default='')

    class Meta:
        db_table = 'rol'
        verbose_name_plural = 'roles'


# auth
class Usuario(AbstractUser):
    armamento = models.BooleanField(verbose_name="armamento", default=False)
    conduccion = models.BooleanField(verbose_name="conduccion", default=False)
    cedula = models.CharField(verbose_name="cedula", max_length=10, default='')
    persona = models.ForeignKey(Persona, verbose_name="personaid", null=True, on_delete=models.RESTRICT)
    rol = models.ForeignKey(Rol, verbose_name="rol", null=True, on_delete=models.RESTRICT)

    class Meta:
        db_table = 'usuario'


class Color(models.Model):
    nombre = models.CharField(verbose_name="nombre", max_length=255, default='')

    class Meta:
        db_table = 'color'
        verbose_name_plural = 'colores'


class CandadoSatelital(models.Model):
    marca = models.CharField(verbose_name="marca", max_length=255, default='')
    tipo = models.CharField(verbose_name="tipo", max_length=255, default='')
    color = models.CharField(verbose_name="color", max_length=255, default='')

    class Meta:
        db_table = 'candado_satelital'
        verbose_name_plural = 'candados_satelitales'


class MarcaVehiculo(models.Model):
    nombre = models.CharField(verbose_name="nombre", max_length=255, default='')

    class Meta:
        db_table = 'marca_vehiculo'
        verbose_name_plural = 'marcas_vehiculo'


class TipoVehiculo(models.Model):
    nombre = models.CharField(verbose_name="nombre", max_length=255, default='')

    class Meta:
        db_table = 'tipo_vehiculo'
        verbose_name_plural = 'tipos_vehiculo'


class Vehiculo(models.Model):
    placa = models.CharField(verbose_name="placa", max_length=255, default='', primary_key=True)
    created_by = models.ForeignKey(Usuario, verbose_name="created_by", null=True, on_delete=models.RESTRICT, related_name="creator")
    created_date = models.DateField(verbose_name="created_date", auto_now_add=True, null=True)
    color = models.ForeignKey(Color, verbose_name="color", null=True, on_delete=models.RESTRICT)
    deleted_date = models.DateField(verbose_name="deleted_date", null=True)
    is_deleted = models.BooleanField(verbose_name="is_deleted", default=False)
    marca = models.ForeignKey(MarcaVehiculo, verbose_name="marca", null=True, on_delete=models.RESTRICT)
    modified_by = models.ForeignKey(Usuario, verbose_name="modified_by", null=True, on_delete=models.RESTRICT, related_name="modifier")
    modified_date = models.DateField(verbose_name="deleted_date", default=date.today)
    motor = models.CharField(verbose_name="motor", max_length=255, default='')
    observaciones = models.TextField(verbose_name="observaciones", default='')
    ruta_foto = models.CharField(verbose_name="ruta_foto", max_length=255, default='')
    tipo = models.ForeignKey(TipoVehiculo, verbose_name="tipo", null=True, on_delete=models.RESTRICT)
    year = models.PositiveSmallIntegerField(verbose_name="year", default=0)

    class Meta:
        db_table = 'vehiculo'
