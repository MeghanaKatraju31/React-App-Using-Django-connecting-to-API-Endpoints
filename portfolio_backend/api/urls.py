from django.urls import path
from . import views

urlpatterns = [
    path('skills/', views.skills_list, name='skills_list'),
]



