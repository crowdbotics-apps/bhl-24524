from django.contrib import admin
from .models import Module, Recording, Subscription, SubscriptionType

admin.site.register(Recording)
admin.site.register(SubscriptionType)
admin.site.register(Module)
admin.site.register(Subscription)

# Register your models here.
