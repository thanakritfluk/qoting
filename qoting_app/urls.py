from django.urls import path
from qoting_app import views

app_name = 'qoting_app'
urlpatterns = [
    path('', views.index, name='index'),
]
