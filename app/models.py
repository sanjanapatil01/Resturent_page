from django.db import models
from django.contrib.auth.models import User

class VegModel(models.Model):
    name=models.CharField(max_length=100)
    price=models.IntegerField()
    image=models.ImageField(upload_to='veg/pic')

    def __str__(self):
        return self.name

class NonvegModel(models.Model):
    name=models.CharField(max_length=100)
    price=models.IntegerField()
    image=models.ImageField(upload_to='nonveg/pic')

    def __str__(self):
        return self.name
    
class DrinksModel(models.Model):
    name=models.CharField(max_length=100)
    price=models.IntegerField()
    image=models.ImageField(upload_to='drinks/pic')

    def __str__(self):
        return self.name

class SnacksModel(models.Model):
    name=models.CharField(max_length=100)
    price=models.IntegerField()
    image=models.ImageField(upload_to='snacks/pic')

    def __str__(self):
        return self.name        
    
class Registration(models.Model):
     username=models.CharField(max_length=40,null=False)
     email=models.EmailField(unique=True)
     password=models.CharField(max_length=30,null=False)    


class Collection(models.Model):
    name=models.CharField(max_length=200)
    price=models.IntegerField()
    image=models.ImageField(upload_to='collection/veg')
    user=models.ForeignKey(User,on_delete=models.CASCADE)     