from django.urls import path
from app import views
from resturent import settings
from django.conf.urls.static import static

urlpatterns=[
    path('',views.home,name='home'),
    path('menu',views.menu,name='menu'),
    path('registration',views.registration,name='registration'),
    path('login',views.login,name='login'),
    path('logout',views.logout,name='logout'),
    path('collectionveg/<int:pk>',views.collectionsVeg,name='collectionveg'),
    path('display_collection',views.displaycollections,name='display_collection'),
    path('delete/<int:pk>',views.delete,name='delete')
]
urlpatterns=urlpatterns+static(settings.MEDIA_URL,document_root=settings.MEDIA_ROOT)