from django.shortcuts import render

# Create your views here.
def startHTML(request):
    filter = []
    for i in request.GET:
        filter.append(i)
    return render(request, 'index_v2.html', {'filter': filter})