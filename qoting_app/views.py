from django.shortcuts import render,get_object_or_404
from django.http import HttpResponse
from .models import Question
# from django.template import loader


# Create your views here.
def start_page(request):
    # Pull all 5 question from database
    all_question = Question.objects.order_by()[:5]
    # template = loader.get_template('qoting_app/startpage.html')
    context = {'all_question': all_question,}
    # output = ', '.join([q.question for q in all_question])
    return render(request, 'qoting_app/startpage.html', context)


def shop_page(request):
    return HttpResponse('Shop page')


def waiting_page(request):
    return HttpResponse("Wait page")


def game_page(request):
    return HttpResponse('Game page')


def result_page(request):
    return HttpResponse('Result page')
