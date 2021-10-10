from django.contrib import admin

from .models import Driver, Trip, Offence


class DriverAdmin(admin.ModelAdmin):
    list = ('id', 'name', 'email', 'date')


class TripAdmin(admin.ModelAdmin):
    list = ('id', 'title', 'date', 'status', 'driver')


class OffenceAdmin(admin.ModelAdmin):
    list = ('id', 'date', 'trip')


admin.site.register(Driver, DriverAdmin)
admin.site.register(Trip, TripAdmin)
admin.site.register(Offence, OffenceAdmin)
