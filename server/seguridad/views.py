from django.http import JsonResponse
# from django.shortcuts import render
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.parsers import JSONParser
# from rest_framework.response import Response
from seguridad.models import *
from seguridad.serializers import *


@api_view(['GET'])
def cargo(request):
    if request.method == 'GET':
        cargos = Cargo.objects.all()
        cargo_serializer=CargoSerializer(cargos,many=True)
        return JsonResponse(cargo_serializer.data, safe=False)

@api_view(['GET','POST'])
def usuarios(request):
    if request.method == 'GET':        
        usuarios = Usuario.objects.all()
        usuario_serializer = UsuarioSerializer (usuarios, many=True)
        return JsonResponse(usuario_serializer.data, safe=False)
    elif request.method == 'POST':
        user_data = JSONParser().parse(request)
        usuario_serializer = UsuarioSerializer(data=user_data)
        if usuario_serializer.is_valid():
            usuario_serializer.save()
            return JsonResponse(usuario_serializer.data, status=status.HTTP_201_CREATED)
        else:
            print(usuario_serializer.errors)
            return JsonResponse(usuario_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET','POST', 'DELETE'])
def personas(request):
    if request.method == 'GET':        
        personas = Persona.objects.all()
        persona_serializer = PersonaSerializer (personas, many=True)
        return JsonResponse(persona_serializer.data, safe=False)
    elif request.method == 'POST':
        persona_data = JSONParser().parse(request)
        persona_serializer = PersonaSerializer(data=persona_data)
        if persona_serializer.is_valid():
            persona_serializer.save()
            return JsonResponse(persona_serializer.data, status=status.HTTP_201_CREATED)
        else:
            print(persona_serializer.errors)
            return JsonResponse(persona_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    

@api_view(['GET','PUT'])
def persona(request, pk):
    persona = Persona.objects.get(pk=pk)
    if request.method == 'GET':
        persona_serializer = PersonaSerializer (persona)
        return JsonResponse(persona_serializer.data, safe=False)
    elif request.method == 'PUT':
        update = JSONParser().parse(request)
        update_serializer = PersonaSerializer(persona, data=update)
        if update_serializer.is_valid():
            update_serializer.save()
            return JsonResponse(update_serializer.data)
        return JsonResponse(update_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET','PUT','DELETE'])
def usuario(request, pk):
    usuario = Usuario.objects.get(pk=pk)
    if request.method == 'GET':
        usuario_serializer = UsuarioSerializer (usuario)
        return JsonResponse(usuario_serializer.data, safe=False)
    elif request.method == 'PUT':
        update = JSONParser().parse(request)
        update_serializer = UsuarioSerializer(usuario, data=update)
        if update_serializer.is_valid():
            update_serializer.save()
            return JsonResponse(update_serializer.data)
        print(update_serializer.errors)
        return JsonResponse(update_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'DELETE':
        usuario.delete()
        return JsonResponse({'message': '¡Recurso eliminado satisfactoriamente!'}, status=status.HTTP_204_NO_CONTENT)



@api_view(['GET'])
def candadosatelital_list(request):
    if request.method == 'GET':
        candados_satelitales = CandadoSatelital.objects.all()
        candados_satelitales = CandadoSatelitalSerializer(candados_satelitales, many=True)
        return JsonResponse(candados_satelitales.data, safe=False)
        # 'safe=False' for objects serialization
    elif request.method == 'POST':
        candadosatelital_data = JSONParser().parse(request)
        candadosatelital_serializer = CandadoSatelitalSerializer(data=candadosatelital_data)
        if candadosatelital_serializer.is_valid():
            candadosatelital_serializer.save()
            return JsonResponse(candadosatelital_serializer.data, status=status.HTTP_201_CREATED)
        return JsonResponse(candadosatelital_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'DELETE':
        count = CandadoSatelital.objects.all().delete()
        return JsonResponse({'message': '¡{} recursos eliminados satisfactoriamente!'.format(count[0])},
                            status=status.HTTP_204_NO_CONTENT)


@api_view(['GET', 'PUT', 'DELETE'])
def candadosatelital_detail(request, pk):
    candadosatelital = CandadoSatelital.objects.get(pk=pk)
    if request.method == 'GET':
        candadosatelital_serializer = CandadoSatelitalSerializer(candadosatelital)
        return JsonResponse(candadosatelital_serializer.data)
    elif request.method == 'PUT':
        candadosatelital_data = JSONParser().parse(request)
        candadosatelital_serializer = CandadoSatelitalSerializer(candadosatelital, data=candadosatelital_data)
        if candadosatelital_serializer.is_valid():
            candadosatelital_serializer.save()
            return JsonResponse(candadosatelital_serializer.data)
        return JsonResponse(candadosatelital_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'DELETE':
        candadosatelital.delete()
        return JsonResponse({'message': '¡Recurso eliminado satisfactoriamente!'}, status=status.HTTP_204_NO_CONTENT)


# @api_view(['GET'])
# def candadosatelital_list_published(request):
#     candados_satelitales = CandadoSatelital.objects.filter([filters])
#
#     if request.method == 'GET':
#         candados_satelitales_serializer = CandadoSatelitalSerializer(candados_satelitales, many=True)
#         return JsonResponse(candados_satelitales_serializer.data, safe=False)

@api_view(['GET', 'POST', 'DELETE'])
def vehiculo_list(request):
    if request.method == 'GET':
        vehiculos = Vehiculo.objects.all()
        vehiculos = VehiculoSerializer(vehiculos, many=True)
        return JsonResponse(vehiculos.data, safe=False)
        # 'safe=False' for objects serialization
    elif request.method == 'POST':
        vehiculo_data = JSONParser().parse(request)
        vehiculo_serializer = VehiculoSerializer(data=vehiculo_data)
        if vehiculo_serializer.is_valid():
            vehiculo_serializer.save()
            return JsonResponse(vehiculo_serializer.data, status=status.HTTP_201_CREATED)
        return JsonResponse(vehiculo_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'DELETE':
        count = Vehiculo.objects.all().delete()
        return JsonResponse({'message': '¡{} recursos eliminados satisfactoriamente!'.format(count[0])},
                            status=status.HTTP_204_NO_CONTENT)


@api_view(['GET', 'PUT', 'DELETE'])
def vehiculo_detail(request, pk):
    vehiculo = Vehiculo.objects.get(pk=pk)
    if request.method == 'GET':
        vehiculo_serializer = VehiculoSerializer(vehiculo)
        return JsonResponse(vehiculo_serializer.data)
    elif request.method == 'PUT':
        vehiculo_data = JSONParser().parse(request)
        vehiculo_serializer = VehiculoSerializer(vehiculo, data=vehiculo_data)
        if vehiculo_serializer.is_valid():
            vehiculo_serializer.save()
            return JsonResponse(vehiculo_serializer.data)
        return JsonResponse(vehiculo_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'DELETE':
        vehiculo.delete()
        return JsonResponse({'message': '¡Recurso eliminado satisfactoriamente!'}, status=status.HTTP_204_NO_CONTENT)

# @api_view(['GET'])
# def vehiculo_list_published(request):
#     vehiculos = Vehiculo.objects.filter([filters])
#
#     if request.method == 'GET':
#         vehiculo_serializer = VehiculoSerializer(vehiculos, many=True)
#         return JsonResponse(vehiculos_serializer.data, safe=False)
