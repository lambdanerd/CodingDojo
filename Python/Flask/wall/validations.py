import re
from flask import flash, redirect, url_for

BLANK_VALIDATION = re.compile(r'^\s*$')
FIRST_NAME_VALIDATION = re.compile(r'^[A-Za-z]+$')
LAST_NAME_VALIDATION = re.compile(r'^[A-Za-z-\']+$')
EMAIL_VALIDATION = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')


def validate_registration(form):
    # All fields are required and must not be blank
    for field in form:
        if BLANK_VALIDATION.match(form[field]):
            flash('Field cannot be blank.')
            return redirect(url_for('index'))

    # First and Last Name cannot contain any numbers
    if not FIRST_NAME_VALIDATION.match(form['first_name']):
        flash('First name may only contain letters.')
        return redirect(url_for('index'))

    if not LAST_NAME_VALIDATION.match(form['last_name']):
        flash('Last name may only contain letters, \', or -.')
        return redirect(url_for('index'))

    # Password should be more than 8 characters
    if len(form['password']) < 8:
        flash('Password should be more than 8 characters')
        return redirect(url_for('index'))

    # Email should be a valid email
    if not EMAIL_VALIDATION.match(form['email']):
        flash('Email address is not valid.')
        return redirect(url_for('index'))

    # Password and Password Confirmation should match
    if form['password'] != form['confirm_password']:
        flash('Passwords do not match.')
        return redirect(url_for('index'))

    # 💰 Ninja Version: Add the validation that requires a password to have at 
    # least 1 uppercase letter and 1 numeric value.


    # 🤓 Hacker Version: Add a birth-date field that must be validated as a
    # valid date and must be from the past.

    ...



def validate_login(form):
    # All fields are required and must not be blank
    

    # First and Last Name cannot contain any numbers


    # Password should be more than 8 characters


    # Email should be a valid email
    # if not EMAIL_VALIDATION.match(form['email']):
    #     flash('Email address is not valid.')
    #     return redirect(url_for('index'))


    # Password and Password Confirmation should match


    # 💰 Ninja Version: Add the validation that requires a password to have at 
    # least 1 uppercase letter and 1 numeric value.


    # 🤓 Hacker Version: Add a birth-date field that must be validated as a
    # valid date and must be from the past.


    ...
