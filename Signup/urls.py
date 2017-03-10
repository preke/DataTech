from django.conf.urls import include, url

urlpatterns = [
    url(r'^index$', 'Signup.views.index', name='Signup_index'),
    url(r'^register$', 'Signup.views.register', name='Signup_register'),
    url(r'^more$', 'Signup.views.more', name='Signup_more'),
]