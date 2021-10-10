from django.shortcuts import render
from .serializers import DriverSerializer, TripSerializer, OffenceSerializer
from rest_framework import viewsets
from .models import Driver, Trip, Offence


class DriverView(viewsets.ModelViewSet):
    serializer_class = DriverSerializer
    queryset = Driver.objects.all()


class TripView(viewsets.ModelViewSet):
    serializer_class = TripSerializer
    queryset = Trip.objects.all()


class OffenceView(viewsets.ModelViewSet):
    serializer_class = OffenceSerializer
    queryset = Offence.objects.all()
