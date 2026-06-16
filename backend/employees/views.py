from django.shortcuts import render, redirect, get_object_or_404
from tasks.models import Task
from .models import Employee


def employee_login(request):

    if request.method == "POST":

        email = request.POST.get("email")
        password = request.POST.get("password")

        employee = Employee.objects.filter(
            email=email,
            password=password
        ).first()

        if employee:

            request.session["employee_name"] = employee.name

            return redirect("/employee/tasks/")

    return render(
        request,
        "employees/employee_login.html"
    )


def my_tasks(request):

    if "employee_name" not in request.session:
        return redirect("/employee/login/")

    employee_name = request.session["employee_name"]

    tasks = Task.objects.filter(
        assigned_employee=employee_name
    )

    return render(
        request,
        "employees/my_tasks.html",
        {
            "tasks": tasks,
            "employee_name": employee_name
        }
    )
def update_task_status(request, task_id):

    if "employee_name" not in request.session:
        return redirect("/employee/login/")

    task = get_object_or_404(Task, task_id=task_id)

    status = request.GET.get("status")

    if status in [
    "Pending",
    "In Progress",
    "Completed"
]:

        old_status = task.status

    task.status = status
    task.save()

    if (
        status == "Completed"
        and
        old_status != "Completed"
    ):

        employee = Employee.objects.filter(
            name=task.assigned_employee
        ).first()

        if employee and employee.current_workload > 0:

            employee.current_workload -= 1
            employee.save()

    return redirect("/employee/tasks/")