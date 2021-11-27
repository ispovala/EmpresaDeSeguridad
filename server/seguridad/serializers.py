from rest_framework import serializers
from .models import *


class CandadoSatelitalSerializer(serializers.ModelSerializer):
    class Meta:
        model = CandadoSatelital
        fields = '__all__'


class VehiculoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Vehiculo
        fields = '__all__'


class UsuarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Usuario
        fields = '__all__'
