from rest_framework import serializers
from .models import *


class ColorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Color
        fields = '__all__'


class MarcaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Marca
        fields = '__all__'


class TipoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tipo
        fields = '__all__'


class CalibreArmaSerializer(serializers.ModelSerializer):
    class Meta:
        model = CalibreArma
        fields = '__all__'


class ArmaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Arma
        fields = ('id',
                  'calibre',
                  'color',
                  'is_deleted',
                  'marca',
                  'observaciones',
                  'ruta_foto',
                  'tipo')


class CandadoSatelitalSerializer(serializers.ModelSerializer):
    class Meta:
        model = CandadoSatelital
        fields = ('id',
                  'color',
                  'is_deleted',
                  'marca',
                  'observaciones',
                  'ruta_foto',
                  'tipo')


class ModeloCelularSerializer(serializers.ModelSerializer):
    class Meta:
        model = ModeloCelular
        fields = '__all__'


class OperadoraCelularSerializer(serializers.ModelSerializer):
    class Meta:
        model = OperadoraCelular
        fields = '__all__'


class CelularSerializer(serializers.ModelSerializer):
    class Meta:
        model = Celular
        fields = ('id',
                  'color',
                  'is_deleted',
                  'marca',
                  'modelo',
                  'numero_contacto',
                  'observaciones',
                  'operadora',
                  'ruta_foto')


class VehiculoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Vehiculo
        fields = ('placa',
                  'color',
                  'is_deleted',
                  'marca',
                  'motor',
                  'observaciones',
                  'ruta_foto',
                  'tipo',
                  'year')


class UsuarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Usuario
        fields = '__all__'


class PersonaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Persona
        fields = '__all__'


class CargoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cargo
        fields = '__all__'
