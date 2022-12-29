from django.contrib import admin
from .models import Client,Pizza,Type,Taille
# Register your models here.
admin.site.register(Client)
admin.site.register(Pizza)
admin.site.register(Type)
admin.site.register(Taille)