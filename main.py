from flask import Flask, render_template, url_for, jsonify

app = Flask('prepare_for_pa')

@app.route('/')
def show_dias():
    link = 'static/images/opening_dia.png'
    return render_template('prepare_for_pa.html', img_link=link, number=0)

@app.route('/change_dia/<new>')
def change_dia(new):
    dias = {
        0: 'static/images/opening_dia.png',
        1: 'static/images/dia1.png',
        2: 'static/images/dia2.png',
        3: 'static/images/dia3.png',
        4: 'static/images/dia4.png',
        5: 'static/images/dia5.png',
        6: 'static/images/closing_dia.png'
    }
    link = dias[int(new)]
    return jsonify(link)