from django import forms

RED = 'red'
GREEN = 'green'
BLUE = 'blue'
COLOR_CHOICES = (
    (RED, 'Red'),
    (GREEN, 'Green'),
    (BLUE, 'Blue')
)


class WordForm(forms.Form):
    word = forms.CharField(label='Word', max_length=32, required=True)
    color = forms.ChoiceField(label='Color',
                              widget=forms.RadioSelect, choices=COLOR_CHOICES, required=True)
    is_big = forms.BooleanField(
        label='Show in BIG font', label_suffix='?', required=False)
