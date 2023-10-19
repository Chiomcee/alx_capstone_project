from flask import Flask, request, render_template, jsonify, send_from_directory, url_for
import smtplib
from email.message import EmailMessage

app = Flask(__name__)

# Define the SMTP server and credentials for sending email
SMTP_SERVER = 'live.omalasschools.com'
SMTP_PORT = 465  # Replace with the correct port for your SMTP server
SMTP_USER = 'support@live.omalasschools.com'
SMTP_PASSWORD = '4a@%]g!Ab-6L'

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/submit_contact_form', methods=['POST'])
def submit_contact_form():
    if request.method == 'POST':
        full_name = request.form['full_name']
        email_address = request.form['email_address']
        mobile_number = request.form['mobile_number']
        email_subject = request.form['email_subject']
        message = request.form['message']

        if not full_name or not email_address or not mobile_number or not email_subject or not message:
            return jsonify({"error": "Fill Required Fields"})

        # Create an EmailMessage
        msg = EmailMessage()
        msg.set_content(f"Name: {full_name}\nEmail: {email_address}\nPhone: {mobile_number}\nSubject: {email_subject}\nMessage: {message}")
        msg['Subject'] = f"Contact Form Submission from {full_name}"
        msg['From'] = SMTP_USER
        msg['To'] = 'recipient@example.com'  # Replace with the recipient's email address

        # Send the email
        try:
            server = smtplib.SMTP(SMTP_SERVER, SMTP_PORT)
            server.starttls()
            server.login(SMTP_USER, SMTP_PASSWORD)
            server.send_message(msg)
            server.quit()
            return jsonify({"message": "Message Sent"})
        except Exception as e:
            return jsonify({"error": f"An error occurred: {str(e)}"})

if __name__ == '__main__':
    app.run()
