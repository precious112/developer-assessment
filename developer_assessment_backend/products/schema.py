import graphene
from graphene_django import DjangoObjectType
from .models import Product

class ProductType(DjangoObjectType):
    class Meta:
        model=Product
        fields=("id","name","description","sku","price","image")

class Query(graphene.ObjectType):
    all_products=graphene.List(ProductType)

    def resolve_all_products(root,info):
        return Product.objects.all()
        pass

schema=graphene.Schema(query=Query)