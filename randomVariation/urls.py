from django.conf.urls import url 
from . import views

app_name = 'randomVariation'

urlpatterns = [
	url(r'^$', views.Home, name='home'),	
]