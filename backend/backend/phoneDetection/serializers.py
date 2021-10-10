from rest_framework import serializers
from .models import Driver, Trip, Offence


class DriverSerializer(serializers.ModelSerializer):
    class Meta:
        model = Driver
        fields = ('id', 'name', 'email', 'date')


class TripSerializer(serializers.ModelSerializer):
    class Meta:
        model = Trip
        fields = ('id', 'title', 'date', 'status', 'driver')


class OffenceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Offence
        fields = ('id', 'date', 'trip')
