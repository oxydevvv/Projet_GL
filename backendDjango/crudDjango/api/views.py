from .models import Client,Pizza,Type,Taille
from .serializers import ClientSerializer,LoginSerializer,PizzaSerializer,TypeSerializer,TailleSerializer,PizzSerializer
from rest_framework import viewsets
from django.http import JsonResponse
from rest_framework import filters
from rest_framework.filters import SearchFilter
from django.views.decorators.csrf import csrf_exempt
from rest_framework.views import APIView
from django.http import HttpResponse
from django.shortcuts import redirect
from django.core import serializers
import json




class ClientViewSet(viewsets.ModelViewSet):
    serializer_class = ClientSerializer
    queryset = Client.objects.all()

class PizzaViewSet(viewsets.ModelViewSet):
    serializer_class = PizzaSerializer
    queryset = Pizza.objects.all()
    
class TypeViewSet(viewsets.ModelViewSet):
    serializer_class = TypeSerializer
    queryset = Type.objects.all()

class TailleViewSet(viewsets.ModelViewSet):
    serializer_class = TailleSerializer
    queryset = Taille.objects.all()

def pizza_by(request):
    param = request.GET.get('param_name')
    print(param)
    result = Pizza.objects.filter(short_description__icontains=param)
    if result is None:
        return JsonResponse({'error': 'Invalid credentials'}, status=401)
    else:
        data = serializers.serialize('json', result)
        return HttpResponse(data, content_type='application/json')


class LoginView(APIView):
  @csrf_exempt
  def post(self, request):
    serializer = LoginSerializer(data=request.data)
    if serializer.is_valid():
      emailClient = serializer.validated_data['email']
      password = serializer.validated_data['motDePasse']
      user = Client.objects.filter(email=emailClient).first()
      if user is None:
        print(" none ici")
        return JsonResponse({'error': 'Invalid credentials'}, status=401)
      else:
        print("not none ici")
        return JsonResponse({'success': 'Login successful'}, status=200)