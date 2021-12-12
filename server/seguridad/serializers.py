from rest_framework import serializers
from .models import *


class ColorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Color
        fields = '__all__'


class MarcaCandadoSatelitalSerializer(serializers.ModelSerializer):
    class Meta:
        model = MarcaCandadoSatelital
        fields = '__all__'


class TipoCandadoSatelitalSerializer(serializers.ModelSerializer):
    class Meta:
        model = TipoCandadoSatelital
        fields = '__all__'


class CandadoSatelitalSerializer(serializers.ModelSerializer):
    class Meta:
        model = CandadoSatelital
        fields = ('id',
                  'color',
                  'is_deleted',
                  'marca',
                  'observaciones',
                  'tipo')


class MarcaVehiculoSerializer(serializers.ModelSerializer):
    class Meta:
        model = MarcaVehiculo
        fields = '__all__'


class TipoVehiculoSerializer(serializers.ModelSerializer):
    class Meta:
        model = TipoVehiculo
        fields = '__all__'


class VehiculoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Vehiculo
        fields = ('placa',
                  'color',
                  'is_deleted',
                  'marca',
                  'motor',
                  'observaciones',
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
