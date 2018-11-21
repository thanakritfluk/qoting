from django.test import TestCase
from selenium import webdriver
from selenium.webdriver.common.keys import Keys

class TestingWeb(TestCase):

    def test_login(self):
        options = webdriver.ChromeOptions()
        options.add_argument("--start-maximized")
        options.add_argument('--ignore-certificate-errors')
        options.add_argument("--test-type")

        driver = webdriver.Chrome()
        driver.get('https://qoting-postgre.herokuapp.com')
        email = driver.find_element_by_name('email')
        passw = driver.find_element_by_name('pass')
        email.clear()
        email.send_keys('test1234@gmail.com')
        passw.send_keys('123456')

        driver.find_element_by_xpath('//div/div/div/div/form/button').click()
        driver.close()