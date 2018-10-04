from django.shortcuts import redirect, render
from django.views.decorators.http import require_POST
from .forms import LocationForm, get_location_forms
from .locations import FARM, CAVE, HOUSE, CASINO, LOCATIONS
from .process import process

# Create your views here.


def index(request):
    if 'gold' not in request.session:
        request.session['gold']: int = 0

    if 'messages' not in request.session:
        request.session['messages']: list = []

    forms = get_location_forms()

    context = {
        'forms': forms
    }

    return render(request, 'main/index.html', context)


@require_POST
def process_gold(request):
    form = LocationForm(request.POST)
    if form.is_valid():
        location = form.cleaned_data['location']
        gold_delta, message = process(location)
        request.session['gold'] += gold_delta
        request.session['messages'].append(message)

    return redirect('index')
