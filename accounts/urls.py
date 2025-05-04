from django.urls import path
from accounts import views
from resturent import settings
from django.conf.urls.static import static 

urlpatterns=[
    path('profile',views.profile,name='profile'),
    path('display',views.displayProfile,name='display/'),
    path('table',views.table,name='table'),
]
urlpatterns=urlpatterns+static(settings.MEDIA_URL,document_root=settings.MEDIA_ROOT)