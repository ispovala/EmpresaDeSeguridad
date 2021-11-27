from django.contrib.auth.models import AbstractUser
from django.db import models


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
    fecha_nacimiento = models.DateTimeField(verbose_name="fecha_nacimiento", null=True)
    direccion = models.CharField(verbose_name="direccion", max_length=255, default='')
    estado = models.CharField(verbose_name="estado", max_length=255, default='')
    fecha_creacion = models.DateTimeField(verbose_name="fecha_creacion", null=True)
    fecha_modificacion = models.DateTimeField(verbose_name="fecha_modificacion", null=True)
    userid = models.IntegerField(verbose_name="userid", null=True)
    cargo = models.ForeignKey(Cargo, verbose_name="cargo", null=True, on_delete=models.CASCADE)
    profesion = models.CharField(verbose_name="profesion", max_length=255, default='')

    class Meta:
        db_table = 'persona'


class Tarjeta(models.Model):
    personaid = models.ForeignKey(Persona, verbose_name="personaid", null=True, on_delete=models.CASCADE)
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
    cedula = models.CharField(verbose_name="cedula", max_length=10, default='')
    persona = models.ForeignKey(Persona, verbose_name="personaid", null=True, on_delete=models.CASCADE)
    rol = models.ForeignKey(Rol, verbose_name="rol", null=True, on_delete=models.CASCADE)

    class Meta:
        db_table = 'usuario'


class CandadoSatelital(models.Model):
    marca = models.CharField(verbose_name="marca", max_length=255, default='')
    tipo = models.CharField(verbose_name="tipo", max_length=255, default='')
    color = models.CharField(verbose_name="color", max_length=255, default='')

    class Meta:
        db_table = 'candadosatelital'
        verbose_name_plural = 'candados_satelitales'


class Vehiculo(models.Model):
    placa = models.CharField(verbose_name="placa", max_length=255, default='', primary_key=True)
    motor = models.CharField(verbose_name="motor", max_length=255, default='')
    marca = models.CharField(verbose_name="marca", max_length=255, default='')
    tipo = models.CharField(verbose_name="tipo", max_length=255, default='')
    color = models.CharField(verbose_name="color", max_length=255, default='')
    year = models.PositiveSmallIntegerField(verbose_name="year", default=0)

    class Meta:
        db_table = 'vehiculo'
