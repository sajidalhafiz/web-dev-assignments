// add Event listener to the edit btn 
document.getElementById('triangle-edit-btn').addEventListener('click', function(){
    displayInputFields('triangle-input-div');
})

//=================================================

// add Event listener to the confirm btn 
document.getElementById('triangle-confirm-btn').addEventListener('click', function(){
    const inputB =  document.getElementById('input-b').value;
    const inputH =  document.getElementById('input-h').value;
    const bValueElement = document.getElementById('b-value');
    const hValueElement = document.getElementById('h-value');
    const calculationBtn = document.getElementById('triangle-calculation');
  
    
    const isValid = inputValidation(inputB, inputH);
    if(isValid){
        calculationBtn.removeAttribute('disabled');
        bValueElement.innerText = inputB;
        hValueElement.innerText = inputH;
        updateValue('triangle-input-div');
    }else{
        alert("Enter non-negative numbers");
    }
})
//==================================================

//triangle area calculation
document.getElementById('triangle-calculation').addEventListener('click', function(){
    //result calculation
    const bValueElement = document.getElementById('b-value');
    const hValueElement = document.getElementById('h-value');
    const result = +bValueElement.innerText * +hValueElement.innerText * 0.5;
    
    //display result
    displayResult('Triangle', result);

})