from django.shortcuts import render,redirect
from .models import Profile
from django.http import JsonResponse
from django.contrib.auth.models import User
from django.contrib import messages

def profile(request):
    profile=Profile()
    if request.method=='POST':
        fname=request.POST.get('fname')
        lname=request.POST.get('lname')
        ph=request.POST.get('ph')
        pic=request.FILES.get('profile_pic')
       
        profile=Profile(
            firstName=fname,
            lastName=lname,
            phNumber=ph,
            profilepic=pic,
            user=request.user
        )
        profile.save()
        return redirect('menu')
      
            
    return render(request,'profile.html',{'data':profile})

def displayProfile(request):
    if request.user.is_authenticated:
        profile = Profile.objects.filter(user=request.user).first()
        data = {
            'first_name': profile.firstName,
            'last_name': profile.lastName,
            'phone': profile.phNumber,
            'profile_pic': profile.profilepic.url,
        }
        return JsonResponse(data) 
        
    return JsonResponse({'error': 'User not authenticated'})


def table(request):
    return render(request,'tables.html')