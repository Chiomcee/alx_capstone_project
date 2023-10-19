from flask import Flask, request, render_template, send_from_directory
import smtplib

app = Flask(__name__, static_folder='static')

@app.route('/', methods=['GET'])
def index():
    return send_from_directory('static', 'index.html')

@app.route('/contact', methods=['POST'])
def contact():
    if request.method == 'POST':
        full_name = request.form['full_name']
        email = request.form['email_address']
        mobile_number = request.form['mobile_number']
        subject = request.form['email_subject']
        message = request.form['message']

        # Configure your email settings
        smtp_server = 'mail.live.omalasschools.com'
        smtp_port = 587
        smtp_username = 'support@live.omalasschools.com'
        smtp_password = '4a@%]g!Ab-6L'
        sender_email = 'support@live.omalasschools.com'
        recipient_email = 'iamotuekong1@gmail.com'

        # Compose the email message
        email_message = f'Sender Name: {full_name}\nEmail: {email}\nMobile Number: {mobile_number}\nSubject: {subject}\nMessage: {message}'

        # Send the email
        try:
            server = smtplib.SMTP(smtp_server, smtp_port)
            server.starttls()
            server.login(smtp_username, smtp_password)
            server.sendmail(sender_email, recipient_email, email_message)
            server.quit()
            return 'Email sent successfully'
        except Exception as e:
            return 'An error occurred while sending the email'

if __name__ == '__main__':
    app.run(debug=True)
