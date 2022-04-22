import pickle
import pandas as pd
import numpy as np
from flask import Flask, render_template, request
app = Flask(__name__)

model = pickle.load(open('insurance_rfr_model.pkl', 'rb'))


@app.route('/', methods=['GET'])
def home():
    return render_template('index.html')


@app.route("/predict-pressure", methods=['POST', 'GET'])
def predict():
    print(request.form)
    int_data = [float(x) for x in request.form.values()]
    #int_data = [float(x) for x in "23.1202 1".split(' ')]
    final_data = np.asarray(int_data)
    data = final_data.reshape(1, -1)
    prediction = model.predict(data)
    print(prediction)
    return render_template('index.html', val=prediction[0])


if __name__ == '__main__':
    app.run(debug=True)
