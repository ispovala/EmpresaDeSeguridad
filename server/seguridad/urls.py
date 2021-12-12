from django.conf.urls import url
from seguridad import views

urlpatterns = [
    # Recursos section
    url(r'^api/colores$', views.color_list),
    # Candado Satelital
    url(r'^api/marca_candado_satelital$', views.marca_candado_satelital_list),
    url(r'^api/tipo_candado_satelital$', views.tipo_candado_satelital_list),
    url(r'^api/candados_satelitales$', views.candado_satelital_list),
    url(r'^api/candados_satelitales/(?P<pk>[0-9]+)$', views.candado_satelital_detail),
    # Vehiculo
    url(r'^api/marca_vehiculo$', views.marca_vehiculo_list),
    url(r'^api/tipo_vehiculo$', views.tipo_vehiculo_list),
    url(r'^api/vehiculos$', views.vehiculo_list),
    url(r'^api/vehiculos/(?P<pk>[A-Z]{3}\-[0-9]{4})$', views.vehiculo_detail),
    # Gestion de usuario
    url(r'^api/usuario/(?P<pk>[0-9]+)$', views.usuario),
    url(r'^api/users', views.usuarios),
    url(r'^api/personas', views.personas),
    url(r'^api/persona/(?P<pk>[0-9]+)$', views.persona),

    url(r'^api/cargo', views.cargo),
]