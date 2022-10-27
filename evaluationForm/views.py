from django.http import JsonResponse
from django.shortcuts import render
from .models import SatisfactionForm
from .serializers import FormSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from rest_framework import viewsets

"""@api_view(['GET', 'POST'])
def satisfaction_list(request):
    if request.method == "GET":
        form = SatisfactionForm.objects.all()
        serializer = FormSerializer(form, many=True)
        return Response(serializer.data)
    
    if request.method == "POST":
        serializer = FormSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)

@api_view(['GET', 'PUT', 'DELETE'])
def satisfaction_detail(request,id):
    try:
        form = SatisfactionForm.objects.get(pk=id)
    except SatisfactionForm.DoesNotExist:
        return Response(status=status.HTTP_201_CREATED)
    
    if request.method == "GET":
        serializer = FormSerializer(form)
        return Response(serializer.data)
    elif request.method == "PUT":
        serializer = FormSerializer(form, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == "DELETE":
        form.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)"""

class FormView(viewsets.ModelViewSet):
    serializer_class = FormSerializer

    queryset = SatisfactionForm.objects.all()
