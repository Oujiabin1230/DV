# Create your views here.

from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
from backend.models import Bar


@require_http_methods(["GET"])
def total_cases(request):
    response = {}
    try:
        response['respdata'] = Bar().total_cases([request.GET.get("start_date"), request.GET.get("end_date")],
                                                 request.GET.get("country_count"))
        response['respMsg'] = 'request ok'
        response['respCode'] = 'succeed'
    except Exception as e:
        print(e)
        response['respMsg'] = str(e)
        response['respCode'] = 'failed'
    return JsonResponse(response)


@require_http_methods(["GET"])
def total_deaths(request):
    response = {}
    try:
        response['respdata'] = Bar().total_deaths([request.GET.get("start_date"), request.GET.get("end_date")],
                                                  request.GET.get("country_count"))
        response['respMsg'] = 'request ok'
        response['respCode'] = 'succeed'
    except Exception as e:
        print(e)
        response['respMsg'] = str(e)
        response['respCode'] = 'failed'
    return JsonResponse(response)


@require_http_methods(["GET"])
def total_tests(request):
    response = {}
    try:
        response['respdata'] = Bar().total_tests([request.GET.get("start_date"), request.GET.get("end_date")],
                                                 request.GET.get("country_count"))
        response['respMsg'] = 'request ok'
        response['respCode'] = 'succeed'
    except Exception as e:
        print(e)
        response['respMsg'] = str(e)
        response['respCode'] = 'failed'
    return JsonResponse(response)


@require_http_methods(["GET"])
def new_cases_sum(request):
    response = {}
    try:
        response['respdata'] = Bar().new_cases_sum([request.GET.get("start_date"), request.GET.get("end_date")],
                                                   request.GET.get("country_count"))
        response['respMsg'] = 'request ok'
        response['respCode'] = 'succeed'
        print("-----------------")
    except Exception as e:
        print(e)
        response['respMsg'] = str(e)
        response['respCode'] = 'failed'
    return JsonResponse(response)


@require_http_methods(["GET"])
def new_deaths_sum(request):
    response = {}
    try:
        response['respdata'] = Bar().new_deaths_sum([request.GET.get("start_date"), request.GET.get("end_date")],
                                                    request.GET.get("country_count"))
        response['respMsg'] = 'request ok'
        response['respCode'] = 'succeed'
        print("-----------------")
    except Exception as e:
        print(e)
        response['respMsg'] = str(e)
        response['respCode'] = 'failed'
    return JsonResponse(response)
