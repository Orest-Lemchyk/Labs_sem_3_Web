from django.shortcuts import render, get_object_or_404, redirect
from .models import Shoe
from .forms import ShoeForm

def index(request):
    shoes = Shoe.objects.all()
    return render(request, 'shoes/index.html', {'shoes': shoes})

def create_shoe(request):
    if request.method == 'POST':
        form = ShoeForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('index')
    else:
        form = ShoeForm()
    return render(request, 'shoes/create.html', {'form': form})

def edit_shoe(request, id):
    shoe = get_object_or_404(Shoe, id=id)
    if request.method == 'POST':
        form = ShoeForm(request.POST, instance=shoe)
        if form.is_valid():
            form.save()
            return redirect('index')
    else:
        form = ShoeForm(instance=shoe)
    return render(request, 'shoes/edit.html', {'form': form})

def delete_shoe(request, id):
    shoe = get_object_or_404(Shoe, id=id)
    if request.method == 'POST':
        shoe.delete()
        return redirect('index')
    return render(request, 'shoes/delete.html', {'shoe': shoe})
