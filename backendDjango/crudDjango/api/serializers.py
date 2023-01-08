from rest_framework import serializers
from .models import Client,Pizza,Type,Taille

class ClientSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Client
        fields = ['id', 'email', 'prenom','nom','adresse','motDePasse']


class LoginSerializer(serializers.Serializer):
  email = serializers.CharField(max_length=100)
  motDePasse = serializers.CharField(max_length=100)

class PizzSerializer(serializers.Serializer):
  nom = serializers.CharField(max_length=100)

class PizzaSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Pizza
        fields = ['id', 'short_description', 'nom','taille','type','price','picture','created']

class TypeSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Type
        fields = ['id','name']

class TailleSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Taille
        fields = ['id','taille']
