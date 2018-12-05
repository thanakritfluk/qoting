# Qoting Game (Voting and Quiz game)
[![CircleCI](https://circleci.com/gh/thanakritfluk/qoting.svg?style=svg)](https://circleci.com/gh/thanakritfluk/qoting)
 [![Codecov](https://codecov.io/gh/thanakritfluk/qoting/branch/dev-test-circleci/graph/badge.svg)](https://codecov.io/gh/thanakritfluk/qoting)
 
Qoting is a quiz competition game of 8 players. In a game, the system will randomize questions for every player - 2 questions for each person and 2 players will have the same question. After every player receives their question, they must answer the question within a fixed time. In the next step, players vote for a winner by voting for the best answer. If one player’s answer  more votes than other answers then he receives a scores for that round. The game continues until the first player to get 100 points be the winner of the game.
### Webpage : [Qoting Game](https://qoting-postgre.herokuapp.com/)

## Introduction of install and run locally
1. clone project reposity
2. Install [python3](https://www.python.org/downloads/) (download the latest version)
3. In command line cd to project directory and `pip install -r requirements.txt`
4. In command line `python3 collectstatic --noinput`
5. Then python3 manage.py runserver
6. Go to provided ip or your localhost

## Documents

- Design Board - [Mockingbot](https://mockingbot.in/app/gKG93IyiYY4PIaKeLOYHpRuXI8VgwvS)
- Task Board - [Kanban](https://github.com/thanakritfluk/qoting/projects/1)  
- Issue Tracker - [Github issues](https://github.com/thanakritfluk/qoting/issues)


## Sprint

Sprint 1                        |   Sprint 2                                 |  Sprint 3
--------------------------------|--------------------------------------------|-------------------------
Testable UI                     | Assign room functional gameplay| Game with fully functional
Simple automated test ready            | Voting function                    | Game ui with finished design
GET PUSH data from firebase |      Get result score in the final page                       | Chat room
Simple design page and sync with firebase deployed on heroku  | Final round for decide winner                                          |
Login and Signup                |                  Completed functional UI                           |

## Developers

ID           |           Name           |               Roles
-------------|--------------------------|-------------------------------------
6010546699   |   Poonnanun Poonnopathum |  Scrum Master, Full Stack Developer
6010545773   |   Thanakrit Daowrueang   |  Back-End Developer
6010545846   |   Piyaphol Wiengperm     |  Back-End Developer
6010545722   |   Katapon Sinpunyawong   |  Font-End and Back-End Developer

## Coverage Report

Click here: [Coverage HTML](http://htmlpreview.github.io/?coverage_html_report/index.html)