from django.shortcuts import render, redirect
from django.http import HttpResponse

# Create your views here.


def index(request):
    return HttpResponse('placeholder to later display all the list of blogs')


def new(request):
    return render(request, 'blogs_app/index.html')


def create(request):
    if request.method == "POST":
        print("*"*50)
        print(request.POST)
        print(request.POST['name'])
        print(request.POST['desc'])
        request.session['name'] = "test"  # more on session below
        print("*"*50)
        return redirect("/")
    else:
        return redirect("/")


def show(request, number=None):
    return HttpResponse(f'placeholder to display blog {number}')


def edit(request, number=None):
    return HttpResponse(f'placeholder to edit blog {number}')


def delete(request, number=None):
    return redirect('/')
