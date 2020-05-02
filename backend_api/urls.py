
from django.urls import path
from rest_framework import routers
from django.urls import include

from .views import CatelogyViewSet, ProductViewSet, ShippingViewSet, OrderViewSet, RatingViewSet, UserViewSet
from django.conf.urls.static import static
from django.conf import settings

router = routers.DefaultRouter()
router.register('users', UserViewSet)
router.register('category', CatelogyViewSet)
router.register('product', ProductViewSet)
router.register('shipping', ShippingViewSet)
router.register('order', OrderViewSet)
router.register('rating', RatingViewSet)

urlpatterns = [
    path('', include(router.urls)),

]

