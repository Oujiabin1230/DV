# Create your views here.
import time

from django.http import JsonResponse
from django.views.decorators.http import require_http_methods

from backend.models import Bar


@require_http_methods(["GET"])
def get_bar(request):
    response = {}
    print(request.GET)
    print(request.GET.get("start_date"))
    try:
        response['respdata'] = Bar().new_cases([request.GET.get("start_date"), request.GET.get("end_date")])
        response['respMsg'] = 'request ok'
        response['respCode'] = 'succeed'
    except Exception as e:
        print(e)
        response['respMsg'] = str(e)
        response['respCode'] = 'failed'
    return JsonResponse(response)
