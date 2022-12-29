from django.urls import include, re_path as url

from rest_framework import routers

import api.views 

router = routers.DefaultRouter()

router.register(r'clients', api.views.ClientViewSet)

urlpatterns = [
    url(r'^', include(router.urls)),
]
