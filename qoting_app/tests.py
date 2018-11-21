from django.test import TestCase, RequestFactory
from django.urls import reverse
from . import views
from django.contrib.auth.models import User
from django.contrib.gis.gdal import driver
from selenium import webdriver


class TestingView(TestCase):

    def setUp(self):
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

    # def test_postsign(self):
    #     response = self.client.get(reverse('qoting_app:postsign'))
    #     self.assertEqual(response.status_code, 200)
    #     self.assertTemplateUsed(response, 'qoting_app/welcome.html')

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

    # def test_postsignup(self):
    #     request = self.factory.get('')


class TestingWeb(TestCase):

    def setup(self):
        options = webdriver.ChromeOptions()
        options.add_argument("--start-maximized")
        options.add_argument('--ignore-certificate-errors')
        options.add_argument("--test-type")

        self.driver = webdriver.Chrome()
        driver.get('https://qoting-postgre.herokuapp.com')

    def test_login(self):
        email = driver.find_element_by_xpath('//*[@id="email"]')
        passw = driver.find_element_by_xpath('//*[@id="pass"]')
        email.clear()
        email.sent_keys('park1234@gmail.com')
        passw.sent_keys('123456')

        self.driver.find_element_by_id('SignIn').click()
