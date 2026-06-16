from django.urls import path
from .views import create_task

urlpatterns = [
    path("manager/create-task/", create_task, name="create_task"),
]