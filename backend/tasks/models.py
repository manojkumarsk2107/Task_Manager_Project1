from django.db import models


class Task(models.Model):

    PRIORITY_CHOICES = [
        ("P1", "Critical"),
        ("P2", "High"),
        ("P3", "Medium"),
        ("P4", "Low"),
    ]

    STATUS_CHOICES = [
        ("Pending", "Pending"),
        ("Assigned", "Assigned"),
        ("In Progress", "In Progress"),
        ("Completed", "Completed"),
    ]

    task_id = models.AutoField(primary_key=True)

    title = models.CharField(max_length=200)

    description = models.TextField()

    priority = models.CharField(
        max_length=2,
        choices=PRIORITY_CHOICES,
        default="P3"
    )

    deadline = models.DateField()

    required_skills = models.TextField()
    required_position = models.CharField(
    max_length=20,
    default="Junior"
)
    assigned_employee = models.IntegerField(
        default=0
    )

    status = models.CharField(
        max_length=20,
        choices=STATUS_CHOICES,
        default="Pending"
    )

    created_at = models.DateTimeField(auto_now_add=True)

    updated_at = models.DateTimeField(auto_now=True)
    assignment_score = models.FloatField(
    default=0
)
    def __str__(self):
        return self.title