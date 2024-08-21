from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view(['GET'])
def skills_list(request):
    skills = [
        "Java", "Python", "React", "Django", "AWS", "Spring Boot"
    ]
    return Response(skills)
