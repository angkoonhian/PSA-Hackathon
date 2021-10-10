from rest_framework import serializers
from .models import Driver, Trip, Offence


class DriverSerializer(serializers.ModelSerializer):
    class Meta:
        model = Driver
        fields = ('id', 'name', 'email', 'date', 'location', 'phone')


class TripSerializer(serializers.ModelSerializer):
    class Meta:
        model = Trip
        fields = ('id', 'title', 'dateStart', 'dateEnd', 'status', 'driver')


class OffenceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Offence
        fields = ('id', 'date', 'trip')
