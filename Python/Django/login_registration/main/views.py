from django.shortcuts import HttpResponse, redirect, render
from django.contrib.auth import authenticate, login
from django.contrib.auth.decorators import login_required
from django.views.decorators.http import require_POST
from .forms import *

# Create your views here.


def index(request):
    login_form = LoginForm()
    register_form = RegistrationForm()

    context = {
        'login_form': login_form,
        'register_form': register_form
    }

    return render(request, 'main/index.html', context)


@require_POST
def login(request):
    login_form = LoginForm(request.POST)

    if login_form.is_valid():
        email = login_form.cleaned_data['email'],
        password = login_form.cleaned_data['password']

        user = authenticate(request, email=email, password=password)

        if user is not None:
            login(request, user)
            return redirect('success')

        else:
            return HttpResponse('Invalid login')

    return redirect('index')


@require_POST
def register(request):
    register_form = RegistrationForm(request.POST)

    if register_form.is_valid():
        user = register_form.save(commit=False)
        user.set_password(register_form.cleaned_data['password'])
        user.save()
        return redirect('success')

    return redirect('index')


@login_required
def success(request):
    return render(request, 'main/success.html')
