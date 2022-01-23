from django.contrib import admin
from django.urls import path
from django.conf.urls import url, include
from django.views.generic import RedirectView
from rest_framework_jwt.views import obtain_jwt_token, refresh_jwt_token

urlpatterns = [
    path('admin/', admin.site.urls),

    # Auth
    path(r'auth/login', obtain_jwt_token),
    path(r'auth/refresh', refresh_jwt_token),

    url(r'^', include('seguridad.urls')),

    # Angular
    url(r'^administrador$', RedirectView.as_view(url='/Administrador/administracion/index.html'), name='home'),

]
