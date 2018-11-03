from django.urls import path
from qoting_app import views

app_name = 'qoting_app'
urlpatterns = [
    path('', views.signIn, name='signin'),
    path('admin/', views.admin, name="admin"),
    path('postsign', views.postsign, name='postsign'),
    path('logout', views.logout, name="logout"),
    path('signup/', views.signUp, name='signup'),
    path('postsignup/', views.postsignup, name='postsignup'),
    path('addquestion/', views.addquestion, name='addquestion'),
    path('postaddquestion/', views.postaddquestion, name="postaddquestion"),

    path('welcome/', views.welcome, name='welcome'),
    path('shop/', views.shop_page, name='shop'),
    path('waiting/', views.waiting_page, name='waiting'),
    path('game/', views.game_page, name='game'),
    path('result/', views.result_page, name='result'),
]
