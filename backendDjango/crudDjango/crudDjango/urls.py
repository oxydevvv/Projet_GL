from django.contrib import admin
from django.urls import include, re_path as url
from rest_framework import routers
from crudDjango import settings 
import api.views
from django.conf.urls.static import static

router = routers.DefaultRouter()
router.register(r'clients', api.views.ClientViewSet)
router.register(r'pizzas', api.views.PizzaViewSet)
router.register(r'types', api.views.TypeViewSet)
router.register(r'tailles', api.views.TailleViewSet)
urlpatterns = [
    url(r'^', include(router.urls)),
    url('admin/', admin.site.urls),
    url('login/', api.views.LoginView.as_view(), name="login"),
    url('pizza/', api.views.pizza_by , name="pizza_by")

]+ static(settings.STATIC_URL, document_root=settings.MEDIA_ROOT)