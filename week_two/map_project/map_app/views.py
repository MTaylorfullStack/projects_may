from django.shortcuts import render, redirect

def home(request):
    return render(request, 'home.html')

def drop_pin(request):
    request.session['address'] = request.POST['location']
    return redirect('/')
