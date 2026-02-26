from rest_framework import serializers
from .models import Product, Order, OrderItem

class ProductSerializer(serializers.ModelSerializer):
    class meta:
        model = Product
        fields = (
            "id",
            "name",
            "description",
            "price"
        )   



class OrderItemSerialiser(serializers.ModelSerializer):
    product = ProductSerializer(many=True, readonly=True)
    class meta: 
        model = OrderItem
        fields = (
            "product",
            "quantity"
        )

class OrderSerialiser(serializers.Modelserialiser):
    items = OrderItemSerialiser(many=True, readonly=True)
    class meta:
        model = Order
        fields = (
            "user",
            "created_at",
            "status",
            "items",
            "products"
        )

