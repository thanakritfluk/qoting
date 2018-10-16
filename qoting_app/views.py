from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse
from .models import Question


# from django.template import loader


# Create your views here.
def start_page(request):
    return render(request, 'qoting_app/startpage.html')


def shop_page(request):
    return render(request, 'qoting_app/shoppage.html')


def waiting_page(request):
    return HttpResponse("Wait page")


def game_page(request):
    # Pull all 5 question from database
    # template = loader.get_template('qoting_app/startpage.html')
    # output = ', '.join([q.question for q in all_question])
    all_question = Question.objects.all().order_by('?')[:8]
    context = {'all_question': all_question}
    return render(request, 'qoting_app/gamepage.html', context)


def result_page(request):
    return HttpResponse('Result page')
