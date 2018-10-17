from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse
from .models import Question
from django.contrib import auth
import pyrebase

# from django.template import loader
# add firebase database to project
config = {
    'apiKey': "AIzaSyAhTZR2XL8HadAZLEdV3t92-yArTXfMxEA",
    'authDomain': "qoting-29a05.firebaseapp.com",
    'databaseURL': "https://qoting-29a05.firebaseio.com",
    'projectId': "qoting-29a05",
    'storageBucket': "qoting-29a05.appspot.com",
    'messagingSenderId': "191615697600"
}

firebase = pyrebase.initialize_app(config)

authe = firebase.auth()


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


def signIn(request):
    return render(request, "qoting_app/signIn.html")


def postsign(request):
    email = request.POST.get('email')
    passw = request.POST.get('pass')
    try:
        user = authe.sign_in_with_email_and_password(email, passw)
    except:
        message = "Invalid credentials"
        return render(request, "qoting_app/signIn.html", {"messg": message})
    # print(user)
    session_id = user['idToken']
    request.session['uid'] = str(session_id)
    return render(request, "qoting_app/welcome.html", {"e": email})


def logout(request):
    auth.logout(request)
    return render(request, 'qoting_app/signIn.html')
