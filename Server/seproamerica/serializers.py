from rest_framework import serializers
from rest_framework.utils import field_mapping 
from seproamerica.models import *

class RolSerializer(serializers.ModelSerializer):
    class Meta:
    	model = Rol
        fields = '__all__'

class CargoSerializer(serializers.ModelSerializer):
    class Meta:
        model: Cargo
        fields= '__all__'

class UsuarioSerializer(serializers.ModelSerializer):
    class Meta:
        model: Usuario
        fields= '__all__'

class PersonaSerializer(serializers.ModelSerializer):
    class Meta:
        model: Persona
        fields= '__all__'
