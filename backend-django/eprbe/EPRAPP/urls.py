from django.contrib import admin
from django.urls import path, include
from EPRAPP.views import EPRLogin

urlpatterns = [
    path('login/', EPRLogin.as_view(), name='login')
]
