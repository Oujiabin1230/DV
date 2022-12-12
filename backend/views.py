from django.shortcuts import render

# Create your views here.
import json

from django.core import serializers
from django.http import JsonResponse
from django.shortcuts import render
from django.views.decorators.http import require_http_methods

from backend.models import Book


@require_http_methods(["GET"])
def show_books(request):
    response = {}
    try:
        books = [0,1,2,3,4,5]
        response['list'] = books
        response['respMsg'] = 'success'
        response['respCode'] = '000000'
        response['flag']=1
    except Exception as e:
        response['respMsg'] = str(e)
        response['respCode'] = '999999'
    return JsonResponse(response)
