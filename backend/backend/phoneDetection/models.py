from django.db import models
import uuid
from datetime import date
from django.utils import timezone

# Create your models here.


class DriverManager(models.Manager):
    def create_driver(self, name, email, location, phone):
        driver = self.create(name=name, email=email,
                             location=location, phone=phone)
        return driver


class Driver(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=100)
    email = models.EmailField(max_length=100)
    date = models.DateField(auto_now_add=True)
    location = models.CharField(max_length=100)
    phone = models.CharField(max_length=100)

    objects = DriverManager()

    def _str_(self):
        return self.id + self.name


class TripManager(models.Manager):
    def create_trip(self, title, dateStart, dateEnd, driver):
        trip = self.create(title=title, dateStart=dateStart,
                           dateEnd=dateEnd, driver=driver)
        return trip


class Trip(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    title = models.CharField(max_length=100)
    dateStart = models.DateTimeField()
    dateEnd = models.DateTimeField()
    status = models.BooleanField(default=False)
    driver = models.ForeignKey(Driver, on_delete=models.CASCADE)

    objects = TripManager()

    def _str_(self):
        return self.id + self.title


class OffenceManager(models.Manager):
    def create_offence(self, trip):
        offence = self.create(trip=trip)
        return offence


class Offence(models.Model):
    id = models.UUIDField(default=uuid.uuid4, editable=False, unique=True)
    date = models.DateTimeField(auto_now_add=True)
    trip = models.OneToOneField(
        Trip, on_delete=models.CASCADE, primary_key=True)

    objects = OffenceManager()

    def _str_(self):
        return self.id + self.trip
