# Generated by Django 3.2 on 2022-08-06 03:26 

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Product',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
                ('description', models.TextField()),
                ('sku', models.CharField(max_length=6)),
                ('price', models.IntegerField(default=0)),
                ('image', models.CharField(max_length=100)),
            ],
        ),
    ]
