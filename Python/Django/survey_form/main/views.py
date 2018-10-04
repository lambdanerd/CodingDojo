from django.shortcuts import HttpResponseRedirect, redirect, render
from django.views.decorators.http import require_POST
from .models import SurveyModel
from .forms import SurveyForm

# Create your views here.


def index(request):
    form = SurveyForm()
    context = {
        'form': form
    }
    return render(request, 'main/index.html', context)


def result(request):
    entry = SurveyModel.objects.get(pk=request.session['id'])
    context = {
        'entry': entry
    }
    return render(request, 'main/result.html', context)


@require_POST
def process(request):
    survey_form = SurveyForm(request.POST)

    if survey_form.is_valid():
        new_survey = survey_form.save()
        request.session['id'] = new_survey.id

    return redirect('result')
