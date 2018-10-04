from django import forms
from .locations import LOCATIONS


class LocationForm(forms.Form):
    location = forms.CharField(widget=forms.HiddenInput)


location_forms: list = []


def _build_location_forms():
    for location in LOCATIONS:
        location_form = LocationForm(data={'location': location[0]})
        location_form.fields['location'].label = location[1]
        location_forms.append(location_form)


def get_location_forms():
    if location_forms is None or location_forms == []:
        _build_location_forms()
    return location_forms
