from django.urls import path
from qoting_app import views


app_name = 'qoting_app'
urlpatterns = [
    path('', views.signIn, name='signin'),
    path('postsign', views.postsign, name='postsign'),
    path('logout', views.logout, name="logout"),
    path('postsignup/', views.postsignup, name='postsignup'),
    path('facebookSignin/', views.fbSignin, name='fbSignin'),
    path('googleSignin/', views.ggSignin, name='ggSignin'),
    path('joining', views.joining, name='joining'),

    path('vote/', views.vote, name='vote'),
    path('welcome/', views.welcome, name='welcome'),
    path('game_play/', views.game_play, name='gameplay'),
    path('result/', views.result_page, name='result'),


    path('adminlogin/', views.adminlogin, name='adminlogin'),
    path('adminpostsign/', views.postadminlogin, name='adminpostsign'),
    path('postaddquestion/', views.postaddquestion, name="postaddquestion"),
]
