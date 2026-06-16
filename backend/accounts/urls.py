from django.urls import path
from .views import (
    manager_login,
    logout_manager,
    view_tasks,
    reports
)

urlpatterns = [
    path("manager/login/", manager_login, name="manager_login"),
    path("manager/logout/", logout_manager, name="logout_manager"),
    path(
    "manager/tasks/",
    view_tasks,
    name="view_tasks"
),
    path(
    "manager/reports/",
    reports,
    name="reports"
),
]