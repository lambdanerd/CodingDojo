from django.shortcuts import render, redirect
from django.utils.crypto import get_random_string

# Create your views here.


def index(request):
    context = {
        "word": get_random_string(length=14)
    }
    return render(request, 'main/index.html', context)


def generate(request):
    return redirect('/')
