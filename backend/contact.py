__author__ = 'Colin'


DEFAULT_FROM_ADDRESS = "no-reply@besavvy.xyz"


REGISTRATION_TEMPLATE = \
"""
<html>
    <head></head>
    <body>
        Hello {{ first_name }}!

        Welcome to Savvy! We hope you'll enjoy our community driven price sharing app. If you have any question please
        feel to reach out to us at <a href="mailto:feedback@besavvy.xyz">feedback@besavvy.xyz</a>.

        Thanks!

        -The Savvy Team
    </body>
</html>
"""

def send_registration_email(user, require_confirmation=False):
    pass