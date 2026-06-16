from django.db import models


class Employee(models.Model):
    POSITION_CHOICES = [
        ("Intern", "Intern"),
        ("Junior", "Junior"),
        ("Mid-Level", "Mid-Level"),
        ("Senior", "Senior"),
        ("Team Lead", "Team Lead"),
    ]

    employee_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=255)

    position = models.CharField(
        max_length=20,
        choices=POSITION_CHOICES
    )

    department = models.CharField(max_length=100)

    skills = models.TextField(
        help_text="Example: Python, SQL, React"
    )

    experience = models.IntegerField(default=0)

    performance_score = models.FloatField(default=0)

    current_workload = models.IntegerField(default=0)
    

    status = models.CharField(
        max_length=20,
        default="Active"
    )
    availability = models.BooleanField(default=True)

    ai_score = models.FloatField(default=0)

    def __str__(self):
        return self.name