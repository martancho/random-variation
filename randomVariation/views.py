from django.shortcuts import render, get_object_or_404, redirect 
from django.contrib.auth.models import User
from django.contrib.auth import logout, login, authenticate
from django.views.generic import View
from .forms import UserForm


class UserFormView(View):
	form_class = UserForm
	template_name = 'registration/registration.html' #login.html
	#instance = get_object_or_404(User)

	def get(self, request):
		form = self.form_class(None)
		return render(request, self.template_name, {'form':form})

	def post(self, request):
		form = self.form_class(request.POST)

		if form.is_valid():
			user = form.save(commit=False)
			#normalized data
			username = form.cleaned_data['username']
			password = form.cleaned_data['password']
			user.set_password(password)
			user.save()

			#returns User object if credentials are correct
			user = authenticate(username=username, password=password)

			if user is not None:
				if user.is_active:
					login(request,user)
					return redirect('RFI:home')

		return render(request, self.template_name, {'form':form})

def Home(request):
	return render(request, 'randomVariation/home.html')

def secondLayer(request):
	return render(request, 'randomVariation/secondLayer.html')

def thirdLayer(request):
	return render(request, 'randomVariation/thirdLayer.html')
