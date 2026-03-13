from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse

def inicio(request):
    tareas = [
        "Estudiar Python",
        "Hacer ejercicio",
        "Leer un libro"
    ]

    return render(request, "inicio.html", {"tareas": tareas})


