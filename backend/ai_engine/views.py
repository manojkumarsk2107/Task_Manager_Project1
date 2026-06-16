from django.http import JsonResponse
from employees.models import Employee
from tasks.models import Task
from .ai_matcher import calculate_score


def assign_task(request):

    latest_task = Task.objects.last()

    if latest_task is None:
        return JsonResponse({
            "message": "No task found"
        })

    task_skills = latest_task.required_skills.split(",")

    best_employee = None
    best_score = -1

    for employee in Employee.objects.all():

        score = calculate_score(
            task_skills,
            employee.skills
        )

        if score > best_score:
            best_score = score
            best_employee = employee

    if best_employee is None:
        return JsonResponse({
            "message": "No employee found"
    })


    latest_task.assigned_employee = best_employee.name
    latest_task.assignment_score = best_score
    latest_task.save()

    return JsonResponse({
        "task": latest_task.title,
        "employee": best_employee.name,
        "score": best_score
    })