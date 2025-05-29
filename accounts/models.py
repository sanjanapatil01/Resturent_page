from django.db import models
from django.contrib.auth.models import User

class Profile(models.Model):
    firstName=models.CharField(max_length=30)
    lastName=models.CharField(max_length=30)
    phNumber=models.IntegerField(max_length=10)
    profilepic=models.ImageField(upload_to='profile')
    user=models.ForeignKey(User,on_delete=models.CASCADE)

    def __str__(self):
        return self.firstName
