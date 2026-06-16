from ai_engine.services import find_best_employee
from django.shortcuts import render, redirect
from .models import Task


def create_task(request):

    if "manager_name" not in request.session:
        return redirect("/manager/login/")

    if request.method == "POST":

        title = request.POST.get("title")
        description = request.POST.get("description")
        priority = request.POST.get("priority")
        deadline = request.POST.get("deadline")
        required_skills = request.POST.get("required_skills")
        required_position = request.POST.get("required_position")
        

        task = Task.objects.create(
            title=title,
            description=description,
            priority=priority,
            deadline=deadline,
            required_skills=required_skills,
            required_position=required_position
        )
        best_employee, best_score = find_best_employee(task)

        if best_employee:
            task.assigned_employee = best_employee.name
            task.assignment_score = best_score
            task.save()
            best_employee.current_workload += 1
            best_employee.save()
        return redirect("/manager/create-task/")

    return render(request, "tasks/create_task.html")