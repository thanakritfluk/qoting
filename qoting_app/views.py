from django.shortcuts import render
from django.http import HttpResponse
from django.contrib import auth
import pyrebase
import random

# add firebase database to project
config = {
    'apiKey': "AIzaSyAioE3uCJP-KCBuA7d0JOCzR2u13qupGkY",
    'authDomain': "qoting-1ca86.firebaseapp.com",
    'databaseURL': "https://qoting-1ca86.firebaseio.com",
    'projectId': "qoting-1ca86",
    'storageBucket': "qoting-1ca86.appspot.com",
    'messagingSenderId': "241026992000"
}

firebase = pyrebase.initialize_app(config)

auth_fb = firebase.auth()

database = firebase.database()


def admin(request):
    try:
        question_list = get_random_questions()
        # print(question_list)
        userid = auth_fb.current_user
        localid = userid['localId']
        nickname = database.child("user").child(str(localid)).child("details").child("name").get().val()
        return render(request, 'qoting_app/admin.html',
                      {"question_list": question_list, "localid": localid, "nickname": nickname})
    except:
        message = "Please login again"
        return render(request, 'qoting_app/signIn.html', {"message": message})


def get_random_questions():
    question_list = []
    inventory = database.child("question").get()
    for question in inventory.each():
        data = str(question.key())
        # print(database.child("question").child(str(data)).child("detail").get().val())
        question_list.append(database.child("question").child(str(data)).child("detail").get().val())
    question_list = random.sample(question_list, 8)
    return question_list

    # Create your views here.


def welcome(request):
    return render(request, 'qoting_app/welcome.html')


def shop_page(request):
    return render(request, 'qoting_app/shoppage.html')


def waiting_page(request):
    return HttpResponse("Wait page")


def game_page(request):
    return
    # Pull all 5 question from database
    # template = loader.get_template('qoting_app/startpage.html')
    # output = ', '.join([q.question for q in all_question])
    # all_question = Question.objects.all().order_by('?')[:8]
    # context = {'all_question': all_question}
    # return render(request, 'qoting_app/gamepage.html', context)


def result_page(request):
    return HttpResponse('Result page')


def signIn(request):
    return render(request, "qoting_app/login.html")


def postsign(request):
    email = request.POST.get('email')
    passw = request.POST.get('pass')
    # User use variable that define from top.
    try:
        user = auth_fb.sign_in_with_email_and_password(email, passw)
    except:
        message = "Invalid credentials"
        return render(request, "qoting_app/login.html", {"message": message})
    print(user['idToken'])
    session_id = user['idToken']
    # Let web know that now auth with this session id
    # auth_fb.send_email_verification(user['idToken'])
    request.session['uid'] = str(session_id)
    return render(request, "qoting_app/welcome.html", {"e": email})


def signUp(request):
    return render(request, "qoting_app/signup.html")


def postsignup(request):
    name = request.POST.get('name')
    eamil = request.POST.get('email')
    passw = request.POST.get('passw')
    if len(str(passw)) < 6:
        massage = "Password should be at least 6 character"
        return render(request, 'qoting_app/signup.html', {'message': massage})
    else:
        try:
            user = auth_fb.create_user_with_email_and_password(eamil, passw)
            uid = user['localId']
            data = {"name": name, "avatar": '0', "coin": '0'}
            database.child("user").child(uid).child("details").set(data)
            return render(request, "qoting_app/signup.html")
        except:
            message = "Email already exits"
            return render(request, "qoting_app/signup.html", {"message": message})


def logout(request):
    auth.logout(request)
    return render(request, 'qoting_app/login.html')


def addquestion(request):
    return render(request, "qoting_app/addquestion.html")


def postaddquestion(request):
    question = request.POST.get('question')
    data = {"detail": str(question)}
    database.child("question").push(data)
    return render(request, "qoting_app/addquestion.html")
