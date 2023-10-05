from flask import render_template

@app.route('/')
def home():
    return render_template('about.html', title='About Me')

@app.route('/skills')
def skills():
    # Fetch your skills data from a database or define them here
    skills_data = ["HTML", "CSS", "Python", "Flask", "MySQL", "JavaScript", "API", "Git"]
    return render_template('skills.html', title='Skills', skills=skills_data)
