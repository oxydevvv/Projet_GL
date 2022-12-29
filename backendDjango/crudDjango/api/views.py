from .models import Client,Pizza,Type,Taille
from .serializers import ClientSerializer,LoginSerializer,PizzaSerializer,TypeSerializer,TailleSerializer
from rest_framework import viewsets
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.views import APIView



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