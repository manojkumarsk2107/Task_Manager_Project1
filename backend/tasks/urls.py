from django.urls import path
from .views import create_task
from .views import (
    create_task,
    create_task_api,
    get_tasks_api
)

urlpatterns = [
    path("manager/create-task/", create_task, name="create_task"),
    path(
    "api/tasks/create/",
    create_task_api,
    name="create_task_api"
    ),
    path(
    "api/tasks/",
    get_tasks_api,
    name="get_tasks_api"
),

]