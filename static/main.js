function validateForm(){
    let preg = document.forms["ml"]["Pregnancies"].value;
    let gluc = document.forms["ml"]["Glucose"].value;
    let bp = document.forms["ml"]["BloodPressure"].value;
    let skin = document.forms["ml"]["SkinThickness"].value;
    let insulin = document.forms["ml"]["Insulin"].value;
    let bmi = document.forms["ml"]["BMI"].value;
    let diab = document.forms["ml"]["DiabetesPedigreeFunction"].value;
    let age = document.forms["ml"]["Age"].value;

    if (isNaN(preg) || isNaN(gluc) || isNaN(bp) || isNaN(skin) || isNaN(insulin) || isNaN(bmi) || isNaN(diab) || isNaN(age)) {
        alert("Please Enter Valid Numeric value");
        return false;
    }
}

// || isNaN(gluc) || isNaN(bp) || isNaN(skin) || isNaN(insulin) || isNaN(bmi) || isNaN(diab)|| isNaN(age) || preg < 0 || gluc < 0 || bp < 0 || skin < 0 || insulin < 0 || bmi < 0 || diab < 0 || age < 0