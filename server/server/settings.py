import datetime
import os
import mimetypes
from pathlib import Path

mimetypes.add_type("text/javascript", ".js", True)

# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'django-insecure-9i2nuj3i3g2ojs5va7feex2&l1jhl%$lq3vt&76r+7exct+o6n'

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

# Custom Settings
# PythonAnyWhere Settings
PAW = True

ALLOWED_HOSTS = [
    'pauldbm.pythonanywhere.com'
]

CORS_ALLOWED_ORIGINS = [
    # 'http://localhost:4200'
    'https://pauldbm.pythonanywhere.com'
]

AUTH_USER_MODEL = 'seguridad.Usuario'

REST_AUTH_SERIALIZERS = {
    'USER_DETAILS_SERIALIZER': 'seguridad.serializers.UsuarioSerializer',
}

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'seguridad',
    'corsheaders',
    'rest_framework',
]

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
    'corsheaders.middleware.CorsMiddleware',
]

ROOT_URLCONF = 'server.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [os.path.join(BASE_DIR, 'static/templates')],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'server.wsgi.application'

if PAW:
    DATABASES = {
        'default': {
            'ENGINE': 'django.db.backends.mysql',
            'NAME': 'PaulDBM$seguridadseproamerica',
            'USER': 'PaulDBM',
            'PASSWORD': '2k21%SeproAm%',
            'HOST': 'PaulDBM.mysql.pythonanywhere-services.com',
            'PORT': 3306,
        }
    }
else:
    DATABASES = {
        'default': {
            'ENGINE': 'django.db.backends.mysql',
            'NAME': 'seguridadseproamerica',
            'USER': 'dbAdminSeproAmerica',
            'PASSWORD': '2k21%SeproAm%',
            'HOST': 'localhost',
            'PORT': 3306,
        }
    }

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]

LANGUAGE_CODE = 'es-EC'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_L10N = True

USE_TZ = True

STATIC_URL = '/static/'
STATIC_ROOT = '/home/PaulDBM/EmpresaDeSeguridad/server/static'

STATICFILES_DIRS = [
    '/home/PaulDBM/EmpresaDeSeguridad/server/static/ang/',
]

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'

JWT_AUTH = {
    'JWT_ALLOW_REFRESH': True,
    'JWT_PAYLOAD_HANDLER': 'server.conf.jwt_custom_payload_handler',
    'JWT_EXPIRATION_DELTA': datetime.timedelta(days=100),
}

REST_FRAMEWORK = {
    'DEFAULT_PERMISSION_CLASSES': (
        'rest_framework.permissions.IsAuthenticatedOrReadOnly',
    ),
    'DEFAULT_AUTHENTICATION_CLASSES': (
        'rest_framework_jwt.authentication.JSONWebTokenAuthentication',
        'rest_framework.authentication.SessionAuthentication',
        'rest_framework.authentication.BasicAuthentication',
    ),
}

DATE_INPUT_FORMATS = [
    '%d-%m-%Y',
    '%Y-%m-%d',
    '%m/%d/%Y',
    '%m/%d/%y'
]
