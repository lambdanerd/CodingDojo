from django.shortcuts import render
from time import gmtime, strftime
# Create your views here.


def index(request):
    context = {
        "time": strftime("%Y-%m-%d %H:%M:%S %p", gmtime())
    }
    return render(request, 'main/index.html', context)
