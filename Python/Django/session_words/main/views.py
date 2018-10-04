from django.shortcuts import redirect, render
from django.views.decorators.http import require_GET, require_POST
from datetime import datetime
from typing import Any, Dict, List, Union

from .forms import WordForm

# Create your views here.


@require_GET
def index(request):
    form = WordForm()

    if 'words' not in request.session:
        # type: List[Dict[str, Union[str, bool, datetime]]]
        request.session['words'] = []

    context = {
        'form': form,
        'words': request.session['words']
    }

    return render(request, 'main/index.html', context)


@require_POST
def add(request):
    form = WordForm(request.POST)
    if form.is_valid():
        new_word = form.cleaned_data['word']
        new_color = form.cleaned_data['color']
        new_is_big = form.cleaned_data['is_big']
        temp_list = request.session['words']
        temp_list.append({
            'word': new_word,
            'color': new_color,
            'is_big': new_is_big,
            'datetime': datetime.strftime(datetime.now(), '%I:%M:%S %p %d %b %Y')
        })
        request.session['words'] = temp_list

    return redirect('index')


@require_GET
def clear(request):
    request.session.flush()
    return redirect('index')
