

from django.shortcuts import get_object_or_404

from .models import Product
from .serializers import ProductSerializer
from rest_framework.response import Response
from rest_framework.decorators import api_view

@api_view(["Get"])
def product_list(request):
    products = Product.object.all()
    serializer = ProductSerializer(products, many=True)

    return Response(serializer.data)

@api_view(["Get"])
def product_list(request, pk):
    product = get_object_or_404(Product, pk=pk)
    serializer = ProductSerializer(product, many=True)

    return Response(serializer.data)