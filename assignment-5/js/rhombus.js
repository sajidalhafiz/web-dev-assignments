
// add Event listener to the edit btn 
document.getElementById('rhombus-edit-btn').addEventListener('click', function () {
    displayInputFields('rhombus-input-div');
})

//=================================================

// add Event listener to the confirm btn 
document.getElementById('rhombus-confirm-btn').addEventListener('click', function () {
    const inputD1 = document.getElementById('rhombus-input-d1').value;
    const inputD2 = document.getElementById('rhombus-input-d2').value;
    const d1ValueElement = document.getElementById('rhombus-d1-value');
    const d2ValueElement = document.getElementById('rhombus-d2-value');
    const calculationBtn = document.getElementById('rhombus-calculation');


    const isValid = inputValidation(inputD1, inputD2);
    if (isValid) {
        calculationBtn.removeAttribute('disabled');
        d1ValueElement.innerText = inputD1;
        d2ValueElement.innerText = inputD2;
        updateValue('rhombus-input-div');
    } else {
        alert("Enter non-negative numbers");
    }

})
//==================================================

//rhombus area calculation
document.getElementById('rhombus-calculation').addEventListener('click', function () {
    //result calculation
    const d1ValueElement = document.getElementById('rhombus-d1-value');
    const d2ValueElement = document.getElementById('rhombus-d2-value');
    const result = +d1ValueElement.innerText * +d2ValueElement.innerText * 0.5;

    //display result
    displayResult('Rhombus', result);

})