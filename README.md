# Qoting Game (Voting and Quiz game)
[![CircleCI](https://circleci.com/gh/thanakritfluk/qoting.svg?style=svg)](https://circleci.com/gh/thanakritfluk/qoting)
  [![codecov](https://codecov.io/gh/thanakritfluk/qoting/branch/master/graph/badge.svg)](https://codecov.io/gh/thanakritfluk/qoting)

Qoting is a quiz competition game of 8 players. In a game, the system will randomize questions for every player - 2 questions for each person and 2 players will have the same question. After every player receives their question, they must answer the question within a fixed time. In the next step, players vote for a winner by voting for the best answer. If one player’s answer  more votes than other answers then he receives a scores for that round. The game continues until the first player to get 100 points be the winner of the game.
### Webpage : [Qoting Game](https://qoting-postgre.herokuapp.com/)

## Instruction of install and run locally
1. Clone project reposity. Go to your workspace and then clone the project.
 <pre>
 $ cd your_workspace
 $ git clone https://github.com/thanakritfluk/qoting.git
  </pre>
2. Install Python(Version 3.5 or above). You can download it here: [download](https://www.python.org/downloads/) (download the latest version)
3. Open your terminal, go to project directory and type command `pip install -r requirements.txt`.
<pre>
 $ cd qoting
 $ pip install -r requirements.txt
</pre>
4. In your terminal, type command:
<pre>
 $ python3 manage.py collectstatic --noinput
</pre>
5. Start running the server.
<pre>
 $ python3 manage.py runserver
</pre>
6. Go to provided ip or your localhost
<pre>
 System check identified no issues (0 silenced).
 November 29, 2018 - 09:36:20
 Django version 2.1.2, using settings 'qoting_project.settings'
 Starting development server at http://127.0.0.1:8000/
 Quit the server with CONTROL-C.
</pre>

## Developer Documents

- Design Board - [Mockingbot](https://mockingbot.in/app/gKG93IyiYY4PIaKeLOYHpRuXI8VgwvS)
- Task Board - [Trello](https://trello.com/b/pqINZU2E/qoting)  
- Issue Tracker - [Github issues](https://github.com/thanakritfluk/qoting/issues)
- Iteration Plan - [Github wiki](https://github.com/thanakritfluk/qoting/wiki/Iteration-plan)


## Developers

Github repo           |           Name           |               Roles
-------------|--------------------------|-------------------------------------
[poonnanun](https://github.com/poonnanun)  |   Poonnanun Poonnopathum |  Scrum Master, Full Stack Developer
[thanakritfluk](https://github.com/thanakritfluk)    |   Thanakrit Daowrueang   |  Back-End Developer
[piyaspark](https://github.com/piyaspark)    |   Piyaphol Wiengperm     |  Back-End Developer
[cynic4018](https://github.com/cynic4018)   |   Katapon Sinpunyawong   |  Font-End and Back-End Developer

## Coverage Report

Click here: [Coverage HTML](http://htmlpreview.github.io/?https://github.com/thanakritfluk/qoting/blob/dev-test-assignroom/coverage_html_report/index.html)
