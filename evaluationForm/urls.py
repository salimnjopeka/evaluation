from django.contrib import admin
from django.urls import path,include
from evaluationForm import views
from rest_framework import routers

# create a router object
router = routers.DefaultRouter()

# register the router
router.register(r'forms',views.FormView, 'form')


urlpatterns = [
    path('admin/', admin.site.urls),
    # path('', views.satisfaction_list, name='index'),
    # path('satisfaction/<int:id>', views.satisfaction_detail)
    path('api/', include(router.urls))
]
