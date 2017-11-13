from django.conf.urls import url 
from randomVariation.views import UserFormView
from . import views

app_name = 'randomVariation'

urlpatterns = [
	url(r'^$', views.Home, name='home'),
	url(r'^register/$', UserFormView.as_view(), name='register'),
	url(r'^secondLayer/$', views.secondLayer, name='secondLayer'),	
	url(r'^thirdLayer/$', views.thirdLayer, name='thirdLayer'),	
]