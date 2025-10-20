from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('create/', views.create_shoe, name='create'),
    path('edit/<int:id>/', views.edit_shoe, name='edit'),
    path('delete/<int:id>/', views.delete_shoe, name='delete'),
]
