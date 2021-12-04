from django.conf.urls import url
from seguridad import views

urlpatterns = [
    url(r'^api/candados_satelitales$', views.candadosatelital_list),
    url(r'^api/candados_satelitales/(?P<pk>[0-9]+)$', views.candadosatelital_detail),
    # url(r'^api/candados_satelitales/published$', views.candadosatelital_list_published)
    url(r'^api/vehiculos$', views.vehiculo_list),
    url(r'^api/vehiculos/(?P<pk>[A-Z]{3}\-[0-9]{4})$', views.vehiculo_detail),
    # url(r'^api/vehiculos/published$', views.vehiculo_list_published)

    url(r'^api/usuario/(?P<pk>[0-9]+)$', views.usuario),
    url(r'^api/users', views.usuarios),
    url(r'^api/personas', views.personas),
    url(r'^api/persona/(?P<pk>[0-9]+)$', views.persona),

    url(r'^api/cargo', views.cargo),
]