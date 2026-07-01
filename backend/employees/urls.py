from django.urls import path
from .views import (
    employee_login,
    my_tasks,
    update_task_status,
    employee_tasks_api,
    update_task_status_api,
    employee_login_api
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

    path(
        "api/employee/tasks/",
        employee_tasks_api,
        name="employee_tasks_api"
    ),

    path(
        "api/update-task-status/",
        update_task_status_api,
        name="update_task_status_api"
    ),

    path(
        "api/employee/login/",
        employee_login_api,
        name="employee_login_api"
    ),
]