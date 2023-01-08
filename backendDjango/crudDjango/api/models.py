from django.db import models
from django_resized import ResizedImageField


class Client(models.Model):
    email = models.CharField(max_length=100,unique=True)
    prenom = models.CharField(max_length=100)
    nom = models.CharField(max_length=100)
    adresse = models.CharField(max_length=100)
    motDePasse = models.CharField(max_length=100)

    def __str__(self):
        return self.email

class Type(models.Model):
    name = models.CharField(max_length=100,null=False,blank=False,unique=True)

    def __str__(self):
        return self.name

class Taille(models.Model):
    taille = models.CharField(max_length=100,null=False,blank=False,unique=True)
    def __str__(self):
        return self.taille

class Pizza(models.Model):
    short_description = models.CharField(max_length=1000,blank=True)
    nom = models.CharField(max_length=100,default="image",blank=True,unique=True)
    taille = models.ManyToManyField(Taille,verbose_name='Taille')
    type = models.ForeignKey(Type, verbose_name='Type', on_delete=models.CASCADE)
    price = models.DecimalField(max_digits=6, decimal_places=2)
    picture = models.CharField(max_length=3000,blank=False)
    created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.nom
