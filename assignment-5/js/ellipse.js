
// add Event listener to the edit btn 
document.getElementById('ellipse-edit-btn').addEventListener('click', function () {
    displayInputFields('ellipse-input-div');
})

//=================================================

// add Event listener to the confirm btn 
document.getElementById('ellipse-confirm-btn').addEventListener('click', function () {
    const inputA = document.getElementById('ellipse-input-a').value;
    const inputB = document.getElementById('ellipse-input-b').value;
    const aValueElement = document.getElementById('ellipse-a-value');
    const bValueElement = document.getElementById('ellipse-b-value');
    const calculationBtn = document.getElementById('ellipse-calculation');


    const isValid = inputValidation(inputA, inputB);
    if (isValid) {
        calculationBtn.removeAttribute('disabled');
        aValueElement.innerText = inputA;
        bValueElement.innerText = inputB;
        updateValue('ellipse-input-div');
    } else {
        alert("Enter non-negative numbers");
    }

})
//==================================================

//ellipse area calculation
document.getElementById('ellipse-calculation').addEventListener('click', function () {
    //result calculation
    const aValueElement = document.getElementById('ellipse-a-value');
    const bValueElement = document.getElementById('ellipse-b-value');
    const result = +bValueElement.innerText * +aValueElement.innerText * 3.1416;

    //display result
    displayResult('Ellipse', result);

})