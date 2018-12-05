from django.test import TestCase
from django.urls import reverse
from qoting_app import views


class TestingView(TestCase):

    def test_welcome(self):
        """
        Test rendering welcome page.
        """
        response = self.client.get(reverse('qoting_app:welcome'))
        self.assertEqual(response.status_code, 200)
        self.assertTemplateUsed(response, 'qoting_app/welcome.html')


    def test_signIn(self):
        """
        Test rendering sign in page.
        """
        response = self.client.get(reverse('qoting_app:signin'))
        self.assertEqual(response.status_code, 200)
        self.assertTemplateUsed(response, 'qoting_app/login.html')

    def test_logout(self):
        """
        Test logout feature.
        """
        response = self.client.get(reverse('qoting_app:logout'))
        self.assertEqual(response.status_code, 200)
        self.assertTemplateUsed(response, 'qoting_app/login.html')

    def test_postsign(self):
        """
        Test sign in function.
        """
        data = {'email': 'test1234@gmail.com', 'pass': '123456'}
        response = self.client.post(reverse('qoting_app:postsign'), data)
        self.assertEqual(response.status_code, 200)
        self.assertTemplateUsed(response, 'qoting_app/welcome.html')

        data = {'email': 'invalid@gmail.com', 'pass': '123456'}
        response = self.client.post(reverse('qoting_app:postsign'), data)
        self.assertEqual(response.status_code, 200)
        self.assertTemplateUsed(response, 'qoting_app/login.html')
        message = response.content.decode('utf-8')
        self.assertTrue('Invalid' in message)

    def test_adminlogin(self):
        response = self.client.get(reverse('qoting_app:adminlogin'))
        self.assertEqual(response.status_code,200)
        self.assertTemplateUsed(response, 'qoting_app/admin_login.html')

    def test_waiting_page(self):
        response = self.client.get(reverse('qoting_app:waiting'))
        self.assertEqual(response.status_code,200)
        self.assertTemplateUsed(response, 'qoting_app/waiting_room.html')

    def test_get_random_questions(self):
        """
        Test question random function.
        """
        question = views.get_random_questions()

        self.assertTrue(question[0], None)
        self.assertEqual(len(question), 8)

    def test_postsignup(self):
        """
        Test sign up function.
        """
        data = {'name': 'tester', 'email': 'test@example.com', 'passw': '123456'}
        response = self.client.post(reverse('qoting_app:postsignup'), data)
        self.assertEqual(response.status_code, 200)
        self.assertTemplateUsed(response, 'qoting_app/login.html')

        data = {'name': 'tester2', 'email': 'test@example.com', 'passw': '12345'}
        response = self.client.post(reverse('qoting_app:postsignup'),data)
        self.assertEqual(response.status_code, 200)
        self.assertTemplateUsed(response, 'qoting_app/login.html')
        message = response.content.decode('utf-8')
        self.assertTrue('at least 6 character' in message)

    def test_joining(self):
        room_number = {'num': '1'}
        response = self.client.post(reverse('qoting_app:joining'),room_number)
        self.assertEqual(response.status_code, 200)
        self.assertTemplateUsed(response, 'qoting_app/gameplay.html')
        message = response.content.decode('utf-8')
        self.assertTrue('1' in message)

    def test_postaddquestion(self):
        question = {'input': 'what is your name'}
        response = self.client.post(reverse('qoting_app:postaddquestion'),question)
        self.assertEqual(response.status_code, 200)
        self.assertTemplateUsed(response, 'qoting_app/admin_page.html')
        message = response.content.decode('utf-8')
        self.assertTrue('Success' in message)

    def test_postadminlogin(self):
        data = {'admin_username': 'root','admin_password': '123456'}
        response = self.client.post(reverse('qoting_app:adminpostsign'),data)
        self.assertEqual(response.status_code, 200)
        self.assertTemplateUsed(response, 'qoting_app/admin_page.html')

