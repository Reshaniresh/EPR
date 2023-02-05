from django.shortcuts import render
from django.contrib.auth import authenticate
from rest_framework.authtoken.models import Token
from django.views.decorators.csrf import csrf_exempt
from rest_framework import status
from django.contrib.auth.models import User

# class based views
from django.http import Http404
from rest_framework.response import Response

from rest_framework.views import APIView
from django.contrib.auth import get_user_model


# Create your views here.
# funtions should be created here


class EPRLogin(APIView):
    def post(self, request):
        token = ""
        resp = {}
        print(request.data)
        username = request.data['username']
        emailId = request.data['emailId']
        password = request.data['password']
        user = authenticate(username=username, password=password)
        print(user)
        if user is not None:
            print('user is authenticated')
            user = get_user_model().objects.first()
            print(user)
            if (Token.objects.all().filter(user=user).exists()):
                Token.objects.all().filter(user=user).delete()
                token = Token.objects.create(user=user)
                print(token.key)
                resp = {"message": "Logged in successfully",
                        "token": token.key}
                return Response(resp, status=status.HTTP_201_CREATED)
            else:    
                token = Token.objects.create(user=user)
                print(token.key)
                resp = {"message": "Logged in successfully",
                        "token": token.key,"description":"Authentication success"}
                return Response(resp, status=status.HTTP_201_CREATED)
        elif user is None:
            print('user not authenticated')
            resp = {"message": "Logged failed", "token": "","description":"Invalid credentials"
                    }
            return Response(resp, status=status.HTTP_200_OK)
        else:
            print('user not authenticated')
            resp = {"message": "Logged failed", "token": "",
            "description":"unauthorized data"
                    }
            return Response(resp, status=status.HTTP_401_UNAUTHORIZED)
        # check if the emailId is present in our app
