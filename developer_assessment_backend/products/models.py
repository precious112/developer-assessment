from django.db import models

# Create your models here.

class Product(models.Model):
    name=models.CharField(max_length=50)
    description=models.TextField()
    sku=models.CharField(max_length=6)
    price=models.IntegerField(default=0)
    image=models.CharField(max_length=100)

    def __str__(self):
        return f'{self.name}'
