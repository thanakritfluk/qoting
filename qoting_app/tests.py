from django.test import TestCase
from django.urls import reverse

class TestingView(TestCase):

    def test_welcome(self):
        response = self.client.get(reverse('qoting_app:welcome'))
        self.assertEqual(response.status_code, 200)

    def test_shop_page(self):
        response = self.client.get(reverse('qoting_app:shop'))
        self.assertEqual(response.status_code, 200)

    def test_signIn(self):
        response = self.client.get(reverse('qoting_app:signin'))
        self.assertEqual(response.status_code, 200)

    def test_logout(self):
        response = self.client.get(reverse('qoting_app:logout'))
        self.assertEqual(response.status_code, 200)

    def test_addquestion(self):
        response = self.client.get(reverse('qoting_app:addquestion'))
        self.assertEqual(response.status_code, 200)


    def test_postaddquestion(self):
        response = self.client.get(reverse('qoting_app:postaddquestion'))
        self.assertEqual(response.status_code, 200)

    # def test_postsignup(self):
    #     response = self.client.get(reverse('qoting_app:postsignup'))
    #     self.assertEqual(response.status_code, 200)

    def test_postsign(self):
        response = self.client.get(reverse('qoting_app:postsign'))
        self.assertEqual(response.status_code, 200)
# Create your tests here.
