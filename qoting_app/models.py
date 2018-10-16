from django.db import models


# Create your models here.
class Question(models.Model):
    question = models.CharField(max_length=100)

    def __str__(self):
        return self.question


class UserDetail(models.Model):
    name = models.CharField(max_length=50)
    coin = models.IntegerField(default=0)
    avatar = models.IntegerField(default=0)

    def __str__(self):
        return self.name
