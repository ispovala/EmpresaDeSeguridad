from django.conf.urls import url
from seguridad import views

urlpatterns = [
    # Recursos section
    url(r'^api/colores$', views.color_list),
    url(r'^api/marcas/(?P<recurso>[1-4])$', views.marca_list),
    url(r'^api/tipos/(?P<recurso>[1-4])$', views.tipo_list),
    # Arma
    url(r'^api/calibres_armas$', views.calibre_arma_list),
    url(r'^api/armas$', views.arma_list),
    url(r'^api/armas/(?P<pk>[0-9]+)$', views.arma_detail),
    # Candado Satelital
    url(r'^api/candados_satelitales$', views.candado_satelital_list),
    url(r'^api/candados_satelitales/(?P<pk>[0-9]+)$', views.candado_satelital_detail),
    # Celular
    url(r'^api/modelos_celulares$', views.modelo_celular_list),
    url(r'^api/operadoras_celulares$', views.operadora_celular_list),
    url(r'^api/celulares$', views.celular_list),
    url(r'^api/celulares/(?P<pk>[0-9]+)$', views.celular_detail),
    # Vehiculo
    url(r'^api/vehiculos$', views.vehiculo_list),
    url(r'^api/vehiculos/(?P<pk>[A-Z]{3}[-][0-9]{4})$', views.vehiculo_detail),
    # Gestion de usuario
    url(r'^api/usuario/(?P<pk>[0-9]+)$', views.usuario),
    url(r'^api/users', views.usuarios),
    url(r'^api/personas', views.personas),
    url(r'^api/persona/(?P<pk>[0-9]+)$', views.persona),

    url(r'^api/cargo', views.cargo),
]
