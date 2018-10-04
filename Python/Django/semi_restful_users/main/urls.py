from django.urls import path
from .views import *

urlpatterns = [
    path('', index, name='index'),
    path('users/', index, name='index'),
    path('users/new/', new, name='users_new'),
    path('users/<int:id>/', show, name='users_show'),
    path('users/<int:id>/edit/', edit, name='users_edit'),
    path('users/<int:id>/destroy/', destroy, name='users_destroy'),
    path('users/create/', create, name='users_create'),
    path('users/update/<int:id>/', update, name='users_update')
]
