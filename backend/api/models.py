from django.db import models

# Create your models here.

from django.db import models
from django.contrib.auth.models import User

class Equipment(models.Model):
    name = models.CharField(max_length=255)
    location = models.CharField(max_length=255)
    status = models.CharField(max_length=50, choices=[('active', 'Active'), ('inactive', 'Inactive')])
    last_maintenance = models.DateField(null=True, blank=True)

class WorkOrder(models.Model):
    title = models.CharField(max_length=255)
    equipment = models.ForeignKey(Equipment, on_delete=models.CASCADE)
    description = models.TextField()
    assigned_to = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    status = models.CharField(max_length=50, choices=[('open', 'Open'), ('in_progress', 'In Progress'), ('closed', 'Closed')])
    priority = models.CharField(max_length=20, choices=[('low', 'Low'), ('medium', 'Medium'), ('high', 'High')])
    created_at = models.DateTimeField(auto_now_add=True)

class MaintenanceSchedule(models.Model):
    equipment = models.ForeignKey(Equipment, on_delete=models.CASCADE)
    schedule_date = models.DateField()
    frequency = models.CharField(max_length=50)
