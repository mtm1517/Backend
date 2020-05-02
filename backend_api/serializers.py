from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Catelogy, Product, Shipping, Order, Rating
from rest_framework.authtoken.models import Token

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'password')
        extra_kwargs = {'password': {'write_only': True, 'required': True}}

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        token = Token.objects.create(user=user)
        return user

class CatelogySerializer(serializers.ModelSerializer):
    class Meta:
        model = Catelogy
        fields = ('id', 'title')
class ProductSerializer(serializers.ModelSerializer):
    id_catelogy = CatelogySerializer(many=False)
    class Meta:
        model = Product
        fields = ('id', 'title', 'description', 'price','image','id_catelogy', 'status')

class ShippingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Shipping
        fields = ('id', 'tracking_number', 'status')

class OrderSerializer(serializers.ModelSerializer):
    id_shipping = ShippingSerializer(many=False)
    id_user = UserSerializer(many=False)
    id_product = ProductSerializer (many=True)

    class Meta:
        model = Order
        fields = ('id', 'id_user', 'total_items', 'total_amount', 'id_shipping', 'id_product')

class RatingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Rating
        fields = ('id', 'id_product', 'id_user', 'status')