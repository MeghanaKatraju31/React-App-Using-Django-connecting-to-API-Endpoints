from rest_framework.response import Response  # Import Response from DRF
from rest_framework.decorators import api_view

@api_view(['GET'])  # Decorator to ensure the view handles API requests properly
def skills_list(request):
    skills = ["Java", "Python", "React", "Django", "AWS", "Spring Boot","Hibernate","Postgresql","Git","Maven","Gradle"]
    return Response(skills)  # Return a DRF Response object

@api_view(['GET'])  # Similarly, apply this to your projects endpoint
def projects_list(request):
    projects = ["Identified fake profiles across online social networks with an algorithm developed in Python", "Road Lane Detection Using OpenCV and Python", "Designing Secure and Efficient Biometric-Based Secure Access Mechanism for Cloud Services", "Schoolify: Program Coordination and Administration Application","Asana Web Application Testing with Selenium Automation"]
    return Response(projects)  # Return a DRF Response object

