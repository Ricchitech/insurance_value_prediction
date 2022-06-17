function validateForm(){
    let Age = document.forms["ml"]["Age"].value;
    let bmi = document.forms["ml"]["bmi"].value;
    let child = document.forms["ml"]["childrens"].value;

    if (isNaN(Age) || Age<0 || Age>100)  {
        alert("Please Enter Valid Age");
        return false;
    }
    if (isNaN(bmi) || bmi<0 || bmi>40)  {
        alert("Please Enter Valid BMI value");
        return false;
    }
    if (isNaN(child) || child>3 || child<0)  {
        alert("Please Enter Valid Childrens value");
        return false;
    }
}