from django.db import models

# Create your models here.


class SurveyModel(models.Model):
    # Locations
    SILICON_VALLEY = 'silicon_valley'
    SEATTLE = 'seattle'
    LOS_ANGELES = 'los_angeles'
    DALLAS = 'dallas'
    CHICAGO = 'chicago'
    TULSA = 'tulsa'
    TYSONS_CORNER = 'tysons_corner'
    EAST_BAY = 'east_bay'
    ONLINE = 'online'
    LOCATION_CHOICES = (
        (SILICON_VALLEY, 'Silicon Valley, CA'),
        (SEATTLE, 'Seattle, WA'),
        (LOS_ANGELES, 'Los Angeles, CA'),
        (DALLAS, 'Dallas, TX'),
        (CHICAGO, 'Chicago, IL'),
        (TULSA, 'Tulsa, OK'),
        (TYSONS_CORNER, 'Tysons Corner, VA'),
        (EAST_BAY, 'East Bay, CA'),
        (ONLINE, 'Online')
    )

    # Languages
    PYTHON = 'python'
    RUBY = 'ruby'
    JAVASCRIPT = 'javascript'
    FAVORTIE_LANGUAGE_CHOICES = (
        (PYTHON, 'Python'),
        (RUBY, 'Ruby'),
        (JAVASCRIPT, 'JavaScript')
    )

    # Fields
    your_name = models.CharField(max_length=25)
    location = models.CharField(
        max_length=14,
        choices=LOCATION_CHOICES,
        default=SILICON_VALLEY
    )
    favorite_language = models.CharField(
        max_length=10,
        choices=FAVORTIE_LANGUAGE_CHOICES,
        default=PYTHON
    )
    comment = models.CharField(
        max_length=250
    )
