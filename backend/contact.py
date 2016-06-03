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
<!DOCTYPE html>
<html>
<body style="margin: 0; background: #f5f5f5; font-family: arial, sans-serif; font-size: 16px; line-height: 24px;">
    <table width="75%" border="0" cellspacing="0" cellpadding="0" align="center" style="border-collapse: collapse; margin: 0 auto;">
        <tbody>
            <tr style="margin-bottom: 20px; margin-top: 20px; display: block; width: 100%;">
                <td>
                    <img style="width: 40%; height: auto;" src="https://82769f8737e762c9e007a605699da5f2844f95d9.googledrive.com/host/0B_JOQUbsXrAKVlMyTFhrWVlCYkk">
                </td>
                <td>
                    <a href="https://savvyapp-dev.azurewebsites.net/#/" style="text-decoration: none; color: #337ab7 !important;" target="_blank">Homepage</a>
                </td>
            </tr>
            <tr style="background: #fff; border: 2px solid #EBEBEB; border-radius: 2px; display: block; margin-bottom: 25px;">
                <td colspan="100%" style="padding: 20px;">
                    <p style="margin-top: 0px;">Hey there {first_name},<p>
                    <p style="margin-bottom: 20px; margin-top: 20px;">Someone requested a new password for your Savvy account.</p>
                    <a href="https://savvyapp-dev.azurewebsites.net/#/reset_password/{reset_code}" style="background: #00A388; color: #fff; border-radius: 2px;
                                    padding: 10px; text-decoration: none; margin-top: 20px;
                                    margin-bottom: 20px; display: block; width: 120px" target="_blank">
                                    Reset Password
                    </a>
                    <p style="margin-bottom: 20px;">If you didn't make this request then you can safely ignore this email.</p>
                    <hr style="width: 25%; margin: 0; border-style: solid; border-color: #ebebeb">
                    <p style="margin-top: 20px;">The Savvy Team</p>
                </td>
            </tr>
            <tr style="display: block; margin-bottom: 25px;">
                <td>
                    <small style="font-size: 10px; color: #979797; line-height: 13px; display: block; text-align: center;">
                        (c) 2016 Savvy. All rights reserved. This email was sent
                        by Team Savvy for our Drexel Senior Project.
                    </small>
                </td>
            </tr>
        </tbody>
    </table>
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
