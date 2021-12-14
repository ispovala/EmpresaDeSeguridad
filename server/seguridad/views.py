from django.http import JsonResponse
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.parsers import JSONParser
from seguridad.serializers import *


@api_view(['GET'])
def cargo(request):
    if request.method == 'GET':
        cargos = Cargo.objects.all()
        cargo_serializer = CargoSerializer(cargos, many=True)
        return JsonResponse(cargo_serializer.data, safe=False)


@api_view(['GET', 'POST'])
def usuarios(request):
    if request.method == 'GET':
        usuarios = Usuario.objects.all()
        usuario_serializer = UsuarioSerializer(usuarios, many=True)
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


@api_view(['GET', 'POST', 'DELETE'])
def personas(request):
    if request.method == 'GET':
        personas = Persona.objects.all()
        persona_serializer = PersonaSerializer(personas, many=True)
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


@api_view(['GET', 'PUT'])
def persona(request, pk):
    persona = Persona.objects.get(pk=pk)
    if request.method == 'GET':
        persona_serializer = PersonaSerializer(persona)
        return JsonResponse(persona_serializer.data, safe=False)
    elif request.method == 'PUT':
        update = JSONParser().parse(request)
        update_serializer = PersonaSerializer(persona, data=update)
        if update_serializer.is_valid():
            update_serializer.save()
            return JsonResponse(update_serializer.data)
        return JsonResponse(update_serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'PUT', 'DELETE'])
def usuario(request, pk):
    usuario = Usuario.objects.get(pk=pk)
    if request.method == 'GET':
        usuario_serializer = UsuarioSerializer(usuario)
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


# Recursos section
@api_view(['GET'])
def color_list(request):
    if request.method == 'GET':
        colores = Color.objects.all()
        colores = ColorSerializer(colores, many=True)
        return JsonResponse(colores.data, safe=False)
        # 'safe=False' for objects serialization


@api_view(['GET'])
def marca_list(request, recurso):
    if request.method == 'GET':
        marcas = Marca.objects.get(recurso=recurso)
        marcas = MarcaSerializer(marcas, many=True)
        return JsonResponse(marcas.data, safe=False)
        # 'safe=False' for objects serialization


@api_view(['GET'])
def tipo_list(request, recurso):
    if request.method == 'GET':
        tipos = Tipo.objects.get(recurso=recurso)
        tipos = TipoSerializer(tipos, many=True)
        return JsonResponse(tipos.data, safe=False)
        # 'safe=False' for objects serialization


@api_view(['GET'])
def calibre_arma_list(request):
    if request.method == 'GET':
        calibres = CalibreArma.objects.all()
        calibres = CalibreArmaSerializer(calibres, many=True)
        return JsonResponse(calibres.data, safe=False)
        # 'safe=False' for objects serialization


@api_view(['GET', 'POST', 'DELETE'])
def arma_list(request):
    if request.method == 'GET':
        armas = Arma.objects.filter(is_deleted=False)
        armas = ArmaSerializer(armas, many=True)
        return JsonResponse(armas.data, safe=False)
        # 'safe=False' for objects serialization
    elif request.method == 'POST':
        arma_data = JSONParser().parse(request)
        arma_serializer = ArmaSerializer(data=arma_data)
        if arma_serializer.is_valid():
            arma_serializer.save()
            return JsonResponse(arma_serializer.data, status=status.HTTP_201_CREATED)
        return JsonResponse(arma_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'DELETE':
        count = Arma.objects.all().delete()
        return JsonResponse({'message': '¡{} armas fueron eliminadas satisfactoriamente!'.format(count[0])},
                            status=status.HTTP_204_NO_CONTENT)


@api_view(['GET', 'PUT', 'DELETE'])
def arma_detail(request, pk):
    arma = Arma.objects.get(pk=pk, is_deleted=False)
    if request.method == 'GET':
        arma_serializer = ArmaSerializer(arma)
        return JsonResponse(arma_serializer.data)
    elif request.method == 'PUT':
        celular_data = JSONParser().parse(request)
        arma_serializer = ArmaSerializer(arma, data=celular_data)
        if arma_serializer.is_valid():
            arma_serializer.save()
            return JsonResponse(arma_serializer.data)
        return JsonResponse(arma_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'DELETE':
        arma.delete()
        return JsonResponse({'message': '¡El arma fue eliminada satisfactoriamente!'},
                            status=status.HTTP_204_NO_CONTENT)


@api_view(['GET', 'POST', 'DELETE'])
def candado_satelital_list(request):
    if request.method == 'GET':
        candados_satelitales = CandadoSatelital.objects.filter(is_deleted=False)
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
        return JsonResponse(
            {'message': '¡{} candados satelitales fueron eliminados satisfactoriamente!'.format(count[0])},
            status=status.HTTP_204_NO_CONTENT)


@api_view(['GET', 'PUT', 'DELETE'])
def candado_satelital_detail(request, pk):
    candadosatelital = CandadoSatelital.objects.get(pk=pk, is_deleted=False)
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
        return JsonResponse({'message': '¡El candado satelital fue eliminado satisfactoriamente!'},
                            status=status.HTTP_204_NO_CONTENT)


@api_view(['GET'])
def modelo_celular_list(request):
    if request.method == 'GET':
        modelos = ModeloCelular.objects.all()
        modelos = ModeloCelularSerializer(modelos, many=True)
        return JsonResponse(modelos.data, safe=False)
        # 'safe=False' for objects serialization


@api_view(['GET'])
def operadora_celular_list(request):
    if request.method == 'GET':
        operadoras = OperadoraCelular.objects.all()
        operadoras = OperadoraCelularSerializer(operadoras, many=True)
        return JsonResponse(operadoras.data, safe=False)
        # 'safe=False' for objects serialization


@api_view(['GET', 'POST', 'DELETE'])
def celular_list(request):
    if request.method == 'GET':
        celulares = Celular.objects.filter(is_deleted=False)
        celulares = CelularSerializer(celulares, many=True)
        return JsonResponse(celulares.data, safe=False)
        # 'safe=False' for objects serialization
    elif request.method == 'POST':
        celular_data = JSONParser().parse(request)
        celular_serializer = CelularSerializer(data=celular_data)
        if celular_serializer.is_valid():
            celular_serializer.save()
            return JsonResponse(celular_serializer.data, status=status.HTTP_201_CREATED)
        return JsonResponse(celular_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'DELETE':
        count = Celular.objects.all().delete()
        return JsonResponse({'message': '¡{} celulares fueron eliminados satisfactoriamente!'.format(count[0])},
                            status=status.HTTP_204_NO_CONTENT)


@api_view(['GET', 'PUT', 'DELETE'])
def celular_detail(request, pk):
    celular = Celular.objects.get(pk=pk, is_deleted=False)
    if request.method == 'GET':
        celular_serializer = CelularSerializer(celular)
        return JsonResponse(celular_serializer.data)
    elif request.method == 'PUT':
        celular_data = JSONParser().parse(request)
        celular_serializer = CelularSerializer(celular, data=celular_data)
        if celular_serializer.is_valid():
            celular_serializer.save()
            return JsonResponse(celular_serializer.data)
        return JsonResponse(celular_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'DELETE':
        celular.delete()
        return JsonResponse({'message': '¡El celular fue eliminado satisfactoriamente!'},
                            status=status.HTTP_204_NO_CONTENT)


@api_view(['GET', 'POST', 'DELETE'])
def vehiculo_list(request):
    if request.method == 'GET':
        vehiculos = Vehiculo.objects.filter(is_deleted=False)
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
        return JsonResponse({'message': '¡{} vehiculos fueron eliminados satisfactoriamente!'.format(count[0])},
                            status=status.HTTP_204_NO_CONTENT)


@api_view(['GET', 'PUT', 'DELETE'])
def vehiculo_detail(request, pk):
    vehiculo = Vehiculo.objects.get(pk=pk, is_deleted=False)
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
        return JsonResponse({'message': '¡El vehiculo fue eliminado satisfactoriamente!'},
                            status=status.HTTP_204_NO_CONTENT)
