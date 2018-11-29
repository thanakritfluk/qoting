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


def get_random_questions():
    question_list = []
    inventory = database.child("question").get()
    for question in inventory.each():
        data = str(question.key())
        question_list.append(database.child("question").child(str(data)).child("detail").get().val())
    question_list = random.sample(question_list, 8)
    return question_list


def welcome(request):
    return render(request, 'qoting_app/welcome.html')


def shop_page(request):
    return render(request, 'qoting_app/shoppage.html')


def waiting_page(request):
    print(request.session['uid'])
    return render(request, 'qoting_app/waiting_room.html')


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
    session_id = user['idToken']
    # Let web know that now auth with this session id
    request.session['uid'] = str(session_id)
    return render(request, "qoting_app/welcome.html", {"e": email})


def signUp(request):
    return render(request, "qoting_app/login.html")


def postsignup(request):
    name = request.POST.get('name')
    eamil = request.POST.get('email')
    passw = request.POST.get('passw')
    if len(str(passw)) < 6:
        massage = "Password should be at least 6 character"
        return render(request, 'qoting_app/login.html', {'message': massage})
    else:
        try:
            user = auth_fb.create_user_with_email_and_password(eamil, passw)
            uid = user['localId']
            data = {"name": name, "avatar": '0', "coin": '0'}
            database.child("user").child(uid).child("details").set(data)
            return render(request, "qoting_app/login.html")
        except:
            message = "Email already exits"
            return render(request, "qoting_app/login.html", {"message": message})


def logout(request):
    auth.logout(request)
    return render(request, 'qoting_app/login.html')


def game_play(request):
    try:
        userid = auth_fb.current_user
        localid = userid['localId']
        nickname = database.child("user").child(str(localid)).child("details").child("name").get().val()
        return render(request, 'qoting_app/gameplay.html', {'localid': localid, 'nickname': nickname})
    except:
        message = "Please login again"
        return render(request, 'qoting_app/login.html', {'message': message})


def adminlogin(request):
    return render(request, 'qoting_app/admin_login.html')


def postadminlogin(request):
    try:
        user = request.POST.get('admin_username')
        passw = request.POST.get('admin_password')
        user_admin_fb = database.child('admin').get().val()
        for i in user_admin_fb:
            pass_admin_fb = database.child('admin').child(str(i)).get().val()
            if str(i) == user and passw == str(pass_admin_fb):
                usernickiname = getallusername()
                print(usernickiname)
                return render(request, 'qoting_app/admin_page.html', {'usernickiname': usernickiname})
    except:
        message = 'Invalid admin credential'
        return render(request, 'qoting_app/admin_login.html', {'message': message})


def getallusername():
    user_key = database.child('user').get().val()
    username = []
    for i in user_key:
        user_name = database.child('user').child(str(i)).child('details').child('name').get().val()
        username.append(user_name + ' : ' + i)
    return username


def postaddquestion(request):
    try:
        question = request.POST.get('question')
        data = {"detail": str(question)}
        database.child("question").push(data)
        return render(request, "qoting_app/admin_page.html")
    except:
        return render(request, "qoting_app/admin_page.html")
