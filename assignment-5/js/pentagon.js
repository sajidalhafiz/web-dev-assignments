
// add Event listener to the edit btn 
document.getElementById('pentagon-edit-btn').addEventListener('click', function () {
    displayInputFields('pentagon-input-div');
})

//=================================================

// add Event listener to the confirm btn 
document.getElementById('pentagon-confirm-btn').addEventListener('click', function () {
    const inputP = document.getElementById('pentagon-input-p').value;
    const inputB = document.getElementById('pentagon-input-b').value;
    const pValueElement = document.getElementById('pentagon-p-value');
    const bValueElement = document.getElementById('pentagon-b-value');
    const calculationBtn = document.getElementById('pentagon-calculation');


    const isValid = inputValidation(inputP, inputB);
    if (isValid) {
        calculationBtn.removeAttribute('disabled');
        pValueElement.innerText = inputP;
        bValueElement.innerText = inputB;
        updateValue('pentagon-input-div');
    } else {
        alert("Enter non-negative numbers");
    }

})
//==================================================

//pentagon area calculation
document.getElementById('pentagon-calculation').addEventListener('click', function () {
    //result calculation
    const pValueElement = document.getElementById('pentagon-p-value');
    const bValueElement = document.getElementById('pentagon-b-value');
    const result = +bValueElement.innerText * +pValueElement.innerText * 0.5;

    //display result
    displayResult('Pentagon', result);

})