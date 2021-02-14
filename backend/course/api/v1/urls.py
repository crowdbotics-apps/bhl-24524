from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import (
    LessonViewSet,
    ModuleViewSet,
    PaymentMethodViewSet,
    RecordingViewSet,
    SubscriptionViewSet,
    SubscriptionTypeViewSet,
)

router = DefaultRouter()
router.register("paymentmethod", PaymentMethodViewSet)
router.register("recording", RecordingViewSet)
router.register("subscriptiontype", SubscriptionTypeViewSet)
router.register("lesson", LessonViewSet)
router.register("module", ModuleViewSet)
router.register("subscription", SubscriptionViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
