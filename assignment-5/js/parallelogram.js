
// add Event listener to the edit btn 
document.getElementById('parallelogram-edit-btn').addEventListener('click', function(){
    displayInputFields('parallelogram-input-div');
})

//=================================================

// add Event listener to the confirm btn 
document.getElementById('parallelogram-confirm-btn').addEventListener('click', function(){
    const inputB =  document.getElementById('parallelogram-input-b').value;
    const inputH =  document.getElementById('parallelogram-input-h').value;
    const bValueElement = document.getElementById('parallelogram-b-value');
    const hValueElement = document.getElementById('parallelogram-h-value');
    const calculationBtn = document.getElementById('parallelogram-calculation');


    const isValid = inputValidation(inputB, inputH);
    if (isValid) {
        calculationBtn.removeAttribute('disabled');
        bValueElement.innerText = inputB;
    hValueElement.innerText = inputH;
    updateValue('parallelogram-input-div');
    } else {
        alert("Enter non-negative numbers");
    }
    
})
//==================================================

//parallelogram area calculation
document.getElementById('parallelogram-calculation').addEventListener('click', function(){
    //result calculation
    const bValueElement = document.getElementById('parallelogram-b-value');
    const hValueElement = document.getElementById('parallelogram-h-value');
    const result = +bValueElement.innerText * +hValueElement.innerText;
    
    //display result
    displayResult('Parallelogram', result);

})