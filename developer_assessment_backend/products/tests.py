from django.test import TestCase
from graphene.test import Client
from .schema import schema
from .models import Product
import json

# Create your tests here.

class ProductSchemaTest(TestCase):

    def setUp(self):
        self.client = Client(schema)

    def test_all_products_query(self):
        
        
        # query all products
        query = '''
            query {
                allProducts {
                    id
                    name
                    description
                    sku
                    price
                    image
                }
            }
        '''
        expected_data = {
            'allProducts': [
    {
        "id":"1",
        "name":"Paracetamol",
        "description":"Paracetamol (acetaminophen) is a pain reliever and a fever reducer",
        "sku":"8HE902",
        "price":300,
        "image":"https://www.m-medix.com/2759-large_default/emzor-paracetamol-tablets.jpg"
    },
    {
        "id":"2",
        "name":"Prednisolone",
        "description":"Prednisolone is a corticosteroid (cortisone-like medicine or steroid). It works on the immune system to help relieve swelling, redness, itching, and allergic reactions",
        "sku":"8HE809",
        "price":600,
        "image":"https://5.imimg.com/data5/RU/SX/JJ/SELLER-109604861/prednisolone-tablet-500x500.jpg"
    },
    {
        "id":"3",
        "name":"Lumefantrine",
        "description":"Lumefantrine is an antimalarial agent used to treat acute uncomplicated malaria.",
        "sku":"8HE809",
        "price":1200,
        "image":"https://i1.wp.com/nimedhealth.com.ng/wp-content/uploads/2020/09/IMG_20200920_082326-1.jpg?fit=2487%2C1599&ssl=1"
    },
    {
        "id":"4",
        "name":"Coflin",
        "description":"Coflin Is Used To Treat Coughs And Congestion Caused By The Common Cold, Bronchitis, And Other Breathing Illnesses.",
        "sku":"8HE809",
        "price":1200,
        "image":"https://www.m-medix.com/2677-large_default/dr-meyers-coflin-expectorant-100ml.jpg"
    }
]
        }
        result = self.client.execute(query)
        
        assert result["data"]==expected_data
