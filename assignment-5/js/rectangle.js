// add Event listener to the edit btn 
document.getElementById('rectangle-edit-btn').addEventListener('click', function () {
    displayInputFields('rectangle-input-div');
})

//=================================================

// add Event listener to the confirm btn 
document.getElementById('rectangle-confirm-btn').addEventListener('click', function () {
    const inputW = document.getElementById('input-w').value;
    const inputL = document.getElementById('input-l').value;
    const wValueElement = document.getElementById('w-value');
    const lValueElement = document.getElementById('l-value');
    const calculationBtn = document.getElementById('rectangle-calculation');


    const isValid = inputValidation(inputW, inputL);
    if (isValid) {
        calculationBtn.removeAttribute('disabled');
        wValueElement.innerText = inputW;
        lValueElement.innerText = inputL;
        updateValue('rectangle-input-div');
    } else {
        alert("Enter non-negative numbers");
    }

})
//==================================================

//rectangle area calculation
document.getElementById('rectangle-calculation').addEventListener('click', function () {
    //result calculation
    const wValueElement = document.getElementById('w-value');
    const lValueElement = document.getElementById('l-value');
    const result = +wValueElement.innerText * +lValueElement.innerText * 0.5;

    //display result
    displayResult('Rectangle', result);

})