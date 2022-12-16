# Create your views here.

from django.http import JsonResponse
from django.views.decorators.http import require_http_methods

from backend.models import Bar


@require_http_methods(["GET"])
def get_bar(request):
    response = {}
    try:
        response['data'] = Bar().new_cases()
        response['respMsg'] = 'request ok'
        response['respCode'] = 'succeed'
    except Exception as e:
        response['respMsg'] = str(e)
        response['respCode'] = 'failed'
    return JsonResponse(response)
