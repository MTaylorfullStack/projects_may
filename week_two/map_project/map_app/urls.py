from django.urls import path
from . import views

urlpatterns = [
    path('', views.home),
    path('process', views.drop_pin)
]
