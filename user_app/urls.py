from django.urls import path
from . import views
app_name = 'user_app'

urlpatterns = [
    path('', views.landing, name='landing')
]