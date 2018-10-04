from django.urls import path
from .views import *

urlpatterns = [
    path('', index, name='index'),
    path('process_gold/', process_gold, name='process_gold'),
]
