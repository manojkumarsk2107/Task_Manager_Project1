from django.urls import path
from .views import (
    employee_login,
    my_tasks,
    update_task_status
)
urlpatterns = [
    path(
        "employee/login/",
        employee_login,
        name="employee_login"
    ),

    path(
        "employee/tasks/",
        my_tasks,
        name="my_tasks"
    ),
    path(
    "employee/task/<int:task_id>/update/",
    update_task_status,
    name="update_task_status"
    ),
]