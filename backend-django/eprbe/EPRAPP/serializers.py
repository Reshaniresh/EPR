from rest_framework import serializers
from .models import *


class AccountSerializer(serializers.ModelSerializer):
    class Meta:
        model = beautician
        fields = ['userId', 'emailId', 'name']
