from django.urls import path
from qoting_app import views

app_name = 'qoting_app'
urlpatterns = [
    path('', views.signIn, name='signin'),
    path('postsign', views.postsign, name='postsign'),
    path('logout', views.logout, name="logout"),
    path('postsignup/', views.postsignup, name='postsignup'),
    path('joining', views.joining, name='joining'),
    # path('addquestion/', views.addquestion, name='addquestion'),
    # path('postaddquestion/', views.postaddquestion, name="postaddquestion"),

    path('welcome/', views.welcome, name='welcome'),
    path('shop/', views.shop_page, name='shop'),
    path('waiting/', views.waiting_page, name='waiting'),
    path('game_play/', views.game_play, name='gameplay'),
    path('result/', views.result_page, name='result'),


    path('adminlogin/', views.adminlogin, name='adminlogin'),
    path('adminpostsign/', views.postadminlogin, name='adminpostsign'),
    path('postaddquestion/', views.postaddquestion, name="postaddquestion"),
]
