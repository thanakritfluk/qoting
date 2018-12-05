from unittest import TestCase
from selenium import webdriver


class TestingWeb(TestCase):

    def setUp(self):
        options = webdriver.ChromeOptions()
        options.add_argument("--start-maximized")
        options.add_argument('--ignore-certificate-errors')
        options.add_argument("--test-type")
        options.add_argument("--headless")
        options.add_argument("--no-sandbox")
        options.add_argument('--disable-dev-shm-usage')
        self.driver = webdriver.Chrome('/usr/local/bin/chromedriver', chrome_options=options)

    def test_sign_in(self):
        driver = self.driver
        driver.get('https://qoting-postgre.herokuapp.com')
        email = driver.find_element_by_name('email')
        passw = driver.find_element_by_name('pass')
        email.send_keys('test1234@gmail.com')
        passw.send_keys('123456')

        driver.find_element_by_xpath('//div/div/div/div/form/button').click()
        driver.close()

    def test_sign_up(self):
        driver = self.driver
        driver.get('https://qoting-postgre.herokuapp.com')

        driver.find_element_by_xpath('//div/div/div/div[2]').click()
        name = driver.find_element_by_xpath('//*[@id="box"]/div[2]/div/form/input[2]')
        email = driver.find_element_by_xpath('//*[@id="box"]/div[2]/div/form/input[3]')
        passw = driver.find_element_by_xpath('//*[@id="box"]/div[2]/div/form/input[4]')
        name.send_keys('Park')
        email.send_keys('park555@gmail.com')
        passw.send_keys('12345678')
        driver.find_element_by_xpath('//*[@id="box"]/div[2]/div/form/div/span').click()
        driver.close()

    def test_logout(self):
        driver = self.driver
        driver.get('https://qoting-postgre.herokuapp.com')
        email = driver.find_element_by_name('email')
        passw = driver.find_element_by_name('pass')
        email.send_keys('test1234@gmail.com')
        passw.send_keys('123456')

        driver.find_element_by_xpath('//div/div/div/div/form/button').click()
        driver.find_element_by_xpath('/html/body/div/div/button[2]').click()
        driver.close()

    def test_join_game(self):
        driver = self.driver
        driver.get('https://qoting-postgre.herokuapp.com')
        email = driver.find_element_by_name('email')
        passw = driver.find_element_by_name('pass')
        email.send_keys('test1234@gmail.com')
        passw.send_keys('123456')

        driver.find_element_by_xpath('//div/div/div/div/form/button').click()

        self.assertTrue(driver.find_element_by_xpath('//*[@id="room"]').text, 0/8)
        driver.find_element_by_xpath('//*[@id="start"]').click()
        self.assertTrue(driver.find_element_by_xpath('//*[@id="room"]').text, 1/8)

    def test_vote(self):
        driver = self.driver
        driver.get('https://qoting-postgre.herokuapp.com/vote')

        driver.find_element_by_xpath('//*[@id="q1-a1"]').click()
        driver.find_element_by_xpath('//*[@id="q1-a2"]').click()
        driver.find_element_by_xpath('//*[@id="q2-a1"]').click()

        driver.close()




