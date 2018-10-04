from django.contrib.auth import authenticate, login
from django.contrib.auth.forms import AuthenticationForm, UserCreationForm
from django.shortcuts import redirect, render
from django.views.decorators.http import require_http_methods
from django.contrib.auth.decorators import login_required

# Create your views here.


def index(request):
    return render(request, 'login_reg/index.html')


@require_http_methods(["GET", "POST"])
def register(request):
    if request.method == 'POST':
        form = UserCreationForm(request.POST)

        if form.is_valid():
            form.save()
            username = form.cleaned_data['username']
            password = form.cleaned_data['password1']
            user = authenticate(username=username, password=password)
            login(request, user)
            return redirect('success')
        else:
            return redirect('index')

    form = UserCreationForm()

    return render(request, 'registration/register.html', {'form': form})


@login_required
def success(request):
    return render(request, 'login_reg/success.html')
