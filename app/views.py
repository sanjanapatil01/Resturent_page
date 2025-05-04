from django.shortcuts import render,redirect
from .models import VegModel,NonvegModel,DrinksModel,SnacksModel,Registration,Collection
from django.contrib import messages
from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from django.contrib import auth
from accounts.models import Profile

def home(request):
    return render(request,'index.html')

def menu(request):
    veg=VegModel.objects.all()
    nonveg=NonvegModel.objects.all()
    drink=DrinksModel.objects.all()
    snacks=SnacksModel.objects.all()
    profile=Profile.objects.filter(user=request.user).first()
    return render(request,'menu.html',{'vegItems':veg,'nonvegItems':nonveg,'drinkItem':drink,'snackItem':snacks,'data':profile})
def login(request):
    if request.method=='POST':
        username=request.POST.get('username')
        password=request.POST.get('password')
        user=authenticate(username=username,password=password)

        if user is None :
            messages.success(request,"Invalid credentials")
            return redirect('login')
        else:
            auth.login(request,user)
            return redirect('home')    
    return render(request,'login.html')    
def registration(request):
    if request.method=='POST':
        username=request.POST.get("username")
        email=request.POST.get('email')
        password1=request.POST.get("password")
        password2=request.POST.get('confirm_password')
        if len(password1)<8:
            messages.success(request,"Password shold be greater than 8 char")
            return redirect('registration')
        
        elif password1 == password2 :
            if User.objects.filter(username=username).exists():
                messages.success(request,"this user name alredy exist!!")
                return redirect('registration')
            elif User.objects.filter(email=email).exists(): 
                messages.success(request,"this email alredy exist!!")
                return redirect('registration')
            else:
                user=User.objects.create_user(username=username,email=email,password=password1)
                user.save()
                return redirect('login')
        else:
            messages.success(request,"both the password not  machting")
            return redirect('registration')

    return render(request,'authentication.html')

def logout(request):
    auth.logout(request)
    return redirect('home')

def collectionsVeg(request,pk):
    item=NonvegModel.objects.get(pk=pk)
    collection=Collection()
    collection.name=item.name
    collection.price=item.price
    collection.image=item.image
    collection.user=request.user
    collection.save()
    return redirect('menu')

def displaycollections(request):
    collection=Collection.objects.filter(user=request.user)
    return render(request,'collections.html',{'data':collection})   

def delete(request,pk):
    item=Collection.objects.get(pk=pk)
    item.delete()
    return redirect('display_collection')