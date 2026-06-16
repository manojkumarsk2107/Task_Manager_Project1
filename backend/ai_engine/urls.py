from django.urls import path
from .views import assign_task

urlpatterns = [
    path(
        "ai/assign/",
        assign_task,
        name="assign_task"
    ),
]