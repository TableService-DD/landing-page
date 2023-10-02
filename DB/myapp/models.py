from django.db import models

class Visitor(models.Model):
    fingerprint = models.CharField(max_length=255, unique=True)
    visit_count = models.IntegerField(default=0)
