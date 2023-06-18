function generateRandomColor() {
    let maxVal = 0xFFFFFF; // 16777215
    let randomNumber = Math.random() * maxVal;
    randomNumber = Math.floor(randomNumber);
    randomNumber = randomNumber.toString(16);
    let randColor = randomNumber.padStart(6, 0);
    return `#${randColor.toUpperCase()}`
}
// console.log(generateRandomColor()); 

function displayInputFields(divId) {
    const inputDiv = document.getElementById(divId);
    inputDiv.style.display = 'flex';
}

function updateValue(divId) {
    const inputDiv = document.getElementById(divId);
    inputDiv.style.display = 'none';
}

function inputValidation(input1, input2){

    if(input1 == '' || input2 == ''){
        alert('Empty fields');
        return false;
    }
    const value1 = parseFloat(input1);
    const value2 = parseFloat(input2);
    if(value1 < 0 || value2 < 0){
        alert('negative values');
        return false;
    }
    return true;
}

function displayResult(name, result) {
    //create elements
    const li = document.createElement('li');
    const div = document.createElement('div');
    div.classList.add('result-item');
    const shapeName = document.createElement('p');
    shapeName.innerText = name;
    const resultElement = document.createElement('p');
    resultElement.innerText = result.toFixed(2);
    const unit = document.createElement('p');
    unit.innerText = 'cm';
    const sup1 = document.createElement('sup');
    sup1.innerText = '2';
    
    //append child
    unit.appendChild(sup1);
    
    const convertBtn = document.createElement('button');
    convertBtn.innerText = 'Convert to m';
    const sup2 = document.createElement('sup');
    sup2.innerText = '2';
    convertBtn.appendChild(sup2);
    convertBtn.classList.add('convert-btn');

    
    div.appendChild(shapeName);
    div.appendChild(resultElement);
    div.appendChild(unit);
    div.appendChild(convertBtn);

    li.appendChild(div);

    // add to the area calculation list
    const ol = document.getElementById('result-list');
    ol.appendChild(li);
    // console.log(ol);
}