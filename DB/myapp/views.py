from django.http import JsonResponse
from .models import Visitor

def update_visitor(request):
    fingerprint = request.GET.get('fingerprint')
    if not fingerprint:
        return JsonResponse({'error': 'Missing fingerprint'}, status=400)

    visitor, created = Visitor.objects.get_or_create(fingerprint=fingerprint)
    if not created:
        visitor.visit_count += 1
    else:
        visitor.visit_count = 1
    visitor.save()

    return JsonResponse({'fingerprint': visitor.fingerprint, 'visit_count': visitor.visit_count})
