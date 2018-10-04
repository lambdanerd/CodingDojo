from django.db import models
from localflavor.us.us_states import STATE_CHOICES

# Create your models here.


class Dojo(models.Model):
    name = models.CharField(max_length=255)
    city = models.CharField(
        max_length=255,
        default='Dallas'
    )
    state = models.CharField(
        max_length=2,
        choices=STATE_CHOICES,
        default='TX'
    )
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f'{self.name}'


class Ninja(models.Model):
    dojo = models.ForeignKey(
        Dojo,
        related_name='ninjas',
        on_delete=models.CASCADE
    )
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)

    def __str__(self):
        return f'{self.first_name} {self.last_name} from {self.dojo}'
