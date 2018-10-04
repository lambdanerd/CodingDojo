from django import forms
from django.contrib.auth.models import User


class RegistrationForm(forms.ModelForm):
    class Meta:
        model = User
        fields = ('first_name', 'last_name', 'email')

    password = forms.CharField(
        label='Password', widget=forms.PasswordInput)

    confirm_password = forms.CharField(
        label='Confirm password', widget=forms.PasswordInput)

    def clean_confirm_password(self):
        if self.cleaned_data['password'] != self.cleaned_data['confirm_password']:
            raise forms.ValidationError('Passwords do not match!')

        return self.cleaned_data['confirm_password']


class LoginForm(forms.Form):
    email = forms.CharField()
    password = forms.CharField(widget=forms.PasswordInput)
