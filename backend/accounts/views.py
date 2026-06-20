from django.shortcuts import render, redirect
from .models import Manager
from tasks.models import Task
from django.db.models import Avg
from employees.models import Employee


def manager_login(request):

    if request.method == "POST":

        email = request.POST.get("email")
        password = request.POST.get("password")

        manager = Manager.objects.filter(
            email=email,
            password=password
        ).first()

        if manager:

            request.session["manager_name"] = manager.name

            return render(
                request,
                "accounts/dashboard.html",
                {
                    "name": manager.name
                }
            )

    return render(
        request,
        "accounts/manager_login.html"
    )


def logout_manager(request):

    request.session.flush()

    return redirect("/manager/login/")
def view_tasks(request):

    if "manager_name" not in request.session:
        return redirect("/manager/login/")

    tasks = Task.objects.all().order_by("-task_id")

    return render(
        request,
        "accounts/view_tasks.html",
        {
            "tasks": tasks
        }
    )
def reports(request):

    if "manager_name" not in request.session:
        return redirect("/manager/login/")

    total_tasks = Task.objects.count()

    completed_tasks = Task.objects.filter(
        status="Completed"
    ).count()

    pending_tasks = Task.objects.filter(
        status="Pending"
    ).count()

    in_progress_tasks = Task.objects.filter(
        status="In Progress"
    ).count()

    average_score = Task.objects.aggregate(
        Avg("assignment_score")
    )["assignment_score__avg"]

    
    top_employees = Employee.objects.order_by(
    "-performance_score"
    )[:5]

    return render(
        request,
        "accounts/reports.html",
        {
            "total_tasks": total_tasks,
            "completed_tasks": completed_tasks,
            "pending_tasks": pending_tasks,
            "in_progress_tasks": in_progress_tasks,
            "average_score": average_score,
            "top_employees": top_employees
        }
    )