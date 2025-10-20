from django.db import models

class Shoe(models.Model):
    producer = models.CharField(max_length=100)
    price = models.FloatField()
    size = models.IntegerField()
    color = models.CharField(max_length=50)

    def __str__(self):
        return f"{self.producer} ({self.size})"
