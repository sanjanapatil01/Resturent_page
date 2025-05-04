from django.contrib import admin
from .models import SnacksModel,VegModel,NonvegModel,DrinksModel,Collection

# Register your models here.
admin.site.register(VegModel)
admin.site.register(SnacksModel)
admin.site.register(DrinksModel)
admin.site.register(NonvegModel)
admin.site.register(Collection)
