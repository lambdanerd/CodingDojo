from django.urls import path
from .views import *

urlpatterns = [
    path('', index, name='index'),
    path('add/', add, name='add'),
    path('clear/', clear, name='clear')
]
