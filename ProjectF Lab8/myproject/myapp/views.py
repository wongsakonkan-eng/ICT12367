from django.shortcuts import render

def index(request):
    return render(request, "index.html")

def about(request):
    return render(request, "about.html")

def form_page(request):
    result = None

    if request.method == "POST":
        result = {
            "firstname": request.POST.get("firstname"),
            "lastname": request.POST.get("lastname"),
            "gender": request.POST.get("gender"),
            "age": request.POST.get("age"),
            "province": request.POST.get("province"),
            "phone": request.POST.get("phone"),
        }

    return render(request, "form.html", {"result": result})