release: python manage.py migrate
web: gunicorn qoting_project.wsgi --log-file -
web: python manage.py collectstatic --noinput
