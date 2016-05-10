import logging
import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText

from backend.config import GMAIL_USERNAME, GMAIL_PASSWORD

__author__ = 'Colin'


DEFAULT_FROM_ADDRESS = "no-reply@besavvy.xyz"


REGISTRATION_TEMPLATE = \
"""
<html>
    <head></head>
    <body>
        Hello {{ first_name }}!<br>
        <br>
        Welcome to Savvy! We hope you'll enjoy our community driven price sharing app. If you have any question please<br>
        feel to reach out to us at <a href="mailto:feedback@besavvy.xyz">feedback@besavvy.xyz</a>.<br>
        <br>
        Thanks!<br>
        <br>
        -The Savvy Team<br>
    </body>
</html>
"""


PASSWORD_RESET_TEMPLATE = \
"""
<html>
    <head></head>
    <body>
        Hello {first_name}!<br>
        <br>
        Sorry you had issues with your password. Here is password reset code you can enter
        <a href="http://besavvy.xyz">here</a>.<br>
        <br>
        <b>{reset_code}</b><br>
        <br>
        If you have any question please feel to reach out to us at
        <a href="mailto:feedback@besavvy.xyz">feedback@besavvy.xyz</a>.<br>
        <br>
        Thanks!<br>
        <br>
        -The Savvy Team<br>
    </body>
</html>
"""


logger = logging.getLogger("backend.contact")


def send_registration_email(user, require_confirmation=False):
    pass


def send_password_reset_code(email_address, first_name, reset_code):
    populated_form = PASSWORD_RESET_TEMPLATE.format(first_name=first_name, reset_code=reset_code)
    send_email(to=email_address, subject="Be Savvy! Reset Your Password", text=populated_form)


def send_email(to, subject, text):
    logger.debug("Sending email with subject '{}' to '{}'.".format(subject, to))
    msg = MIMEMultipart()
    msg['From'] = GMAIL_USERNAME
    msg['To'] = to
    msg['Subject'] = subject
    msg.attach(MIMEText(text, 'html'))

    logger.debug("Logging into SMTP Server.")
    mail_server = smtplib.SMTP("smtp.gmail.com", 587)
    mail_server.ehlo()
    mail_server.starttls()
    mail_server.ehlo()
    mail_server.login(GMAIL_USERNAME, GMAIL_PASSWORD)
    logger.debug("Successfully logged into SMTP Server.")
    mail_server.sendmail(GMAIL_USERNAME, to, msg.as_string())
    logger.info("Sent email with subject '{}' to '{}'.".format(subject, to))
    mail_server.close()


def test():
    send_email(to="cmcintosh33@gmail.com", subject="Be Savvy! Test Message", text="This is a test message from Be Savvy.")


if __name__ == "__main__":
    test()
