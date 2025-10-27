from django.shortcuts import render, get_object_or_404, redirect
from django.http import JsonResponse
from .models import Shoe
from .forms import ShoeForm

def shoes_list(request):
    shoes = Shoe.objects.all()

    query = request.GET.get('q')
    if query:
        shoes = shoes.filter(producer__icontains=query)

    sort = request.GET.get('sort')
    if sort in ['producer', 'price', 'size', 'color']:
        shoes = shoes.order_by(sort)

    if request.headers.get('x-requested-with') == 'XMLHttpRequest':
        data = list(shoes.values())
        return JsonResponse({'shoes': data})

    return render(request, 'shoes/index.html', {'shoes': shoes})


def shoe_create(request):
    if request.method == "POST":
        form = ShoeForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect("index")
    else:
        form = ShoeForm()
    return render(request, "shoes/create.html", {"form": form})

def shoe_edit(request, pk):
    shoe = get_object_or_404(Shoe, pk=pk)
    if request.method == "POST":
        form = ShoeForm(request.POST, instance=shoe)
        if form.is_valid():
            form.save()
            return redirect("index")
    else:
        form = ShoeForm(instance=shoe)
    return render(request, "shoes/edit.html", {"form": form, "shoe": shoe})

def shoe_delete(request, pk):
    shoe = get_object_or_404(Shoe, pk=pk)
    shoe.delete()
    return redirect("index")