from django.test import TestCase, RequestFactory
from django.urls import reverse
from qoting_app import views
from django.contrib.auth.models import User


class TestingView(TestCase):

    def test_setUp(self):
        self.factory = RequestFactory()
        self.user = User.objects.create_user(
            username='park', email='park1234@gmail.com', password='123456'
        )

    def test_welcome(self):
        response = self.client.get(reverse('qoting_app:welcome'))
        self.assertEqual(response.status_code, 200)
        self.assertTemplateUsed(response, 'qoting_app/welcome.html')

    def test_shop_page(self):
        response = self.client.get(reverse('qoting_app:shop'))
        self.assertEqual(response.status_code, 200)
        self.assertTemplateUsed(response, 'qoting_app/shoppage.html')

    def test_signIn(self):
        response = self.client.get(reverse('qoting_app:signin'))
        self.assertEqual(response.status_code, 200)
        self.assertTemplateUsed(response, 'qoting_app/login.html')

    def test_logout(self):
        response = self.client.get(reverse('qoting_app:logout'))
        self.assertEqual(response.status_code, 200)
        self.assertTemplateUsed(response, 'qoting_app/login.html')

    def test_postsign(self):
        data = {'email': 'test1234@gmail.com', 'pass': '123456'}
        response = self.client.post(reverse('qoting_app:postsign'), data)
        self.assertEqual(response.status_code, 200)
        self.assertTemplateUsed(response, 'qoting_app/welcome.html')

    def test_adminlogin(self):
        response = self.client.get(reverse('qoting_app:adminlogin'))
        self.assertEqual(response.status_code,200)
        self.assertTemplateUsed(response, 'qoting_app/admin_login.html')

    def test_waiting_page(self):
        response = self.client.get(reverse('qoting_app:waiting'))
        self.assertEqual(response.status_code,200)
        self.assertTemplateUsed(response, 'qoting_app/waiting_room.html')

    def test_get_random_questions(self):
        question = views.get_random_questions()

        self.assertTrue(question[0], None)
        self.assertEqual(len(question), 8 )

    def test_postsignup(self):
        data = {'name': 'tester', 'email': 'test@example.com', 'passw': '123456'}
        response = self.client.get(reverse('qoting_app:postsignup'), data)
        self.assertEqual(response.status_code, 200)
        self.assertTemplateUsed(response, 'qoting_app/login.html')

    # def test_admin_login(self):
    #     data = {'admin_username': 'ou','admin_password': '1234'}
    #     response = self.client.get(reverse('qoting_app:adminlogin'), data)
    #     self.assertEqual(response.status_code, 200)
    #     self.assertTemplateUsed(response, 'qoting_app/admin_page.html')