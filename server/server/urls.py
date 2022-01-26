from django.contrib import admin
from django.urls import path
from django.conf.urls import url, include
# from django.views.generic import TemplateView
from django.conf import settings
from django.conf.urls.static import static
from rest_framework_jwt.views import obtain_jwt_token, refresh_jwt_token
from server import views

urlpatterns = [
    path('admin/', admin.site.urls),

    # Auth
    path(r'auth/login', obtain_jwt_token),
    path(r'auth/refresh', refresh_jwt_token),

    url(r'^', include('seguridad.urls')),

    # Administracion
    url(r'^(?P<path>.*)/$', views.index),
    # url(r'login/', TemplateView.as_view(template_name="home.html"), name="home"),

] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
