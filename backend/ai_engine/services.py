from employees.models import Employee
from .ai_matcher import calculate_score


def find_best_employee(task):

    task_skills = task.required_skills.split(",")

    best_employee = None
    best_score = -1

    for employee in Employee.objects.all():

        score = calculate_score(
            task,
            employee
    )

        if score > best_score:
            best_score = score
            best_employee = employee

    return best_employee, best_score