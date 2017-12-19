# filename: happy_birthday.py
"""A basic (single function) API written using hug"""
import hug
import random


@hug.get('/randomCharacter')
def echo():
    characters = ['chewbacca', 'luke', 'bobafett', 'kyloren']
    return random.choice(characters)
