from django.urls import path
from .views import hello_world

urlpatterns = [
    path('hello/', hello_world),
]

rom django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import EquipmentViewSet, WorkOrderViewSet, MaintenanceScheduleViewSet

router = DefaultRouter()
router.register('equipment', EquipmentViewSet)
router.register('workorders', WorkOrderViewSet)
router.register('schedules', MaintenanceScheduleViewSet)

urlpatterns = [
    path('', include(router.urls))
]
