from django.shortcuts import render, HttpResponseRedirect, redirect
from django.views.decorators.http import require_POST
from .models import User
from .forms import UserForm

# Create your views here.


def index(request):
    users = User.objects.all()
    context = {
        "users": users
    }
    return render(request, 'main/index.html', context)


def new(request):
    form = UserForm()
    context = {
        "form": form
    }
    return render(request, 'main/new.html', context)


def show(request, id):
    context = {
        "user": User.objects.get(pk=id)
    }
    return render(request, 'main/show.html', context)


def edit(request, id):
    user = User.objects.get(pk=id)
    form = UserForm(request.POST, instance=user)
    context = {
        "user": user,
        "form": form
    }
    return render(request, 'main/edit.html', context)


def destroy(request, id):
    user = User.objects.get(pk=id)
    user.delete()
    return redirect('index')


@require_POST
def create(request):
    form = UserForm(request.POST)
    if form.is_valid():
        form.save()
    return redirect('index')


@require_POST
def update(request, id):
    user = User.objects.get(pk=id)
    form = UserForm(request.POST, instance=user)
    if form.is_valid():
        form.save()
    return redirect('users_show', id)
