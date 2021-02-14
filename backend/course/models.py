from django.conf import settings
from django.db import models


class PaymentMethod(models.Model):
    "Generated Model"
    user = models.ForeignKey(
        "users.User",
        on_delete=models.CASCADE,
        related_name="paymentmethod_user",
    )
    primary = models.BooleanField()
    token = models.CharField(
        max_length=256,
    )


class Recording(models.Model):
    "Generated Model"
    media = models.URLField()
    user = models.ForeignKey(
        "users.User",
        on_delete=models.CASCADE,
        related_name="recording_user",
    )
    published = models.DateTimeField()


class SubscriptionType(models.Model):
    "Generated Model"
    name = models.CharField(
        max_length=256,
    )


class Lesson(models.Model):
    "Generated Model"
    module = models.ForeignKey(
        "course.Module",
        on_delete=models.CASCADE,
        related_name="lesson_module",
    )
    title = models.CharField(
        max_length=256,
    )
    description = models.TextField()
    media = models.URLField()


class Module(models.Model):
    "Generated Model"
    title = models.CharField(
        max_length=256,
    )
    description = models.TextField()


class Subscription(models.Model):
    "Generated Model"
    subscription_type = models.ForeignKey(
        "course.SubscriptionType",
        on_delete=models.CASCADE,
        related_name="subscription_subscription_type",
    )
    user = models.ForeignKey(
        "users.User",
        on_delete=models.CASCADE,
        related_name="subscription_user",
    )


# Create your models here.
