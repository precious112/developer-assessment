from django.urls import URLPattern, path
from graphene_django.views import GraphQLView
from products.schema import schema
from django.views.decorators.csrf import csrf_exempt

urlpatterns=[
    path('products',csrf_exempt(GraphQLView.as_view(graphiql=True,schema=schema))),
]
pass