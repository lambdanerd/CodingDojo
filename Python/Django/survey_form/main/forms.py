from django import forms
from .models import SurveyModel


class SurveyForm(forms.ModelForm):
    class Meta:
        model = SurveyModel
        fields = ('your_name', 'location', 'favorite_language', 'comment')
