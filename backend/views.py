# Create your views here.

from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
from backend.models import Bar, Funnel, Others, Line, map_pic, rili


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
    except Exception as e:
        print(e)
        response['respMsg'] = str(e)
        response['respCode'] = 'failed'
    return JsonResponse(response)


@require_http_methods(["GET"])
def continent_cases(request):
    response = {}
    try:
        response['respdata'] = Funnel().continent_cases([request.GET.get("start_date"), request.GET.get("end_date")])
        response['respMsg'] = 'request ok'
        response['respCode'] = 'succeed'
    except Exception as e:
        print(e)
        response['respMsg'] = str(e)
        response['respCode'] = 'failed'
    return JsonResponse(response)


@require_http_methods(["GET"])
def continent_deaths(request):
    response = {}
    try:
        response['respdata'] = Funnel().continent_deaths([request.GET.get("start_date"), request.GET.get("end_date")])
        response['respMsg'] = 'request ok'
        response['respCode'] = 'succeed'
    except Exception as e:
        print(e)
        response['respMsg'] = str(e)
        response['respCode'] = 'failed'
    return JsonResponse(response)


@require_http_methods(["GET"])
def continent_new_cases(request):
    response = {}
    try:
        response['respdata'] = Funnel().continent_new_cases(
            [request.GET.get("start_date"), request.GET.get("end_date")])
        response['respMsg'] = 'request ok'
        response['respCode'] = 'succeed'
    except Exception as e:
        print(e)
        response['respMsg'] = str(e)
        response['respCode'] = 'failed'
    return JsonResponse(response)


@require_http_methods(["GET"])
def continent_new_deaths(request):
    response = {}
    try:
        response['respdata'] = Funnel().continent_new_deaths(
            [request.GET.get("start_date"), request.GET.get("end_date")])
        response['respMsg'] = 'request ok'
        response['respCode'] = 'succeed'
    except Exception as e:
        print(e)
        response['respMsg'] = str(e)
        response['respCode'] = 'failed'
    return JsonResponse(response)


@require_http_methods(["GET"])
def countries(request):
    response = {}
    try:
        response['respdata'] = Others().countries()
        response['respMsg'] = 'request ok'
        response['respCode'] = 'succeed'
    except Exception as e:
        print(e)
        response['respMsg'] = str(e)
        response['respCode'] = 'failed'
    return JsonResponse(response)


@require_http_methods(["GET"])
def country_new_cases(request):
    response = {}
    try:
        response['respdata'] = Line().country_new_cases([request.GET.get("start_date"), request.GET.get("end_date")],
                                                        request.GET.get("country"))
        response['respMsg'] = 'request ok'
        response['respCode'] = 'succeed'
    except Exception as e:
        print(e)
        response['respMsg'] = str(e)
        response['respCode'] = 'failed'
    return JsonResponse(response)



@require_http_methods(["GET"])
def country_new_deaths(request):
    response = {}
    try:
        response['respdata'] = Line().country_new_deaths([request.GET.get("start_date"), request.GET.get("end_date")],
                                                        request.GET.get("country"))
        response['respMsg'] = 'request ok'
        response['respCode'] = 'succeed'
    except Exception as e:
        print(e)
        response['respMsg'] = str(e)
        response['respCode'] = 'failed'
    return JsonResponse(response)


@require_http_methods(["GET"])
def country_now_data(request):
    response = {}
    try:
        response['respdata'] = Line().country_now_data([request.GET.get("start_date"), request.GET.get("end_date")],
                                                        request.GET.get("country"))
        response['respMsg'] = 'request ok'
        response['respCode'] = 'succeed'
    except Exception as e:
        print(e)
        response['respMsg'] = str(e)
        response['respCode'] = 'failed'
    return JsonResponse(response)


@require_http_methods(["GET"])
def map_day_new(request):
    response = {}
    try:
        response['respdata'] = map_pic().map_day_new([request.GET.get("start_date"), request.GET.get("end_date")])
        response['respMsg'] = 'request ok'
        response['respCode'] = 'succeed'
    except Exception as e:
        print(e)
        response['respMsg'] = str(e)
        response['respCode'] = 'failed'
    return JsonResponse(response)


@require_http_methods(["GET"])
def rili_world_new(request):
    response = {}
    try:
        response['respdata'] = rili().rili_world_new([request.GET.get("start_date"), request.GET.get("end_date")])
        response['respMsg'] = 'request ok'
        response['respCode'] = 'succeed'
    except Exception as e:
        print(e)
        response['respMsg'] = str(e)
        response['respCode'] = 'failed'
    return JsonResponse(response)

@require_http_methods(["GET"])
def rili_country_new(request):
    response = {}
    try:
        response['respdata'] = rili().rili_country_new([request.GET.get("start_date"), request.GET.get("end_date")],
                                                       request.GET.get("country"))
        response['respMsg'] = 'request ok'
        response['respCode'] = 'succeed'
    except Exception as e:
        print(e)
        response['respMsg'] = str(e)
        response['respCode'] = 'failed'
    return JsonResponse(response)