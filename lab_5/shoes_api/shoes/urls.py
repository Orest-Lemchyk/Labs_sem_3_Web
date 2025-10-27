from django.urls import path
from . import views

urlpatterns = [
    path('', views.shoes_list, name='index'),
    path('create/', views.shoe_create, name='shoe_create'),
    path('<int:pk>/edit/', views.shoe_edit, name='shoe_edit'),
    path('<int:pk>/delete/', views.shoe_delete, name='shoe_delete'),
]