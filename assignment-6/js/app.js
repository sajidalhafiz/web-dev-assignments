const loadData = async () => {
    setTimeout(showSpinner(true), 2000);
    const res = await fetch(`https://openapi.programming-hero.com/api/ai/tools`);
    const data = await res.json();
    const tools = data.data.tools;

    showData(tools.slice(0, 6));
    document.getElementById('see-more-btn').addEventListener('click', function () {
        showData(tools);
    });

}


const showData = tools => {
    // console.log(tools);
    const cardContainer = document.getElementById('card-container');
    cardContainer.innerHTML = '';

    tools.forEach(tool => {
        // console.log(tool.id);
        const cardDiv = document.createElement('div');
        cardDiv.classList.add("card", "p-3", "rounded", "rounded-4", "col");
        cardDiv.innerHTML = `
            <img src="${tool.image}" class="card-img-top" alt="...">
            <div class="card-body p-0 py-4">
                <h5 class="card-title fw-bold fs-3">Features</h5>
                <ol class="card-text">
                    <li>${tool.features[0]}</li>
                    <li>${tool.features[1]}</li>
                    <li>${tool.features[2]}</li>
                </ol>
            </div>
            <div class="card-footer bg-white p-0 d-flex justify-content-between align-items-center pt-4">
                <div>
                    <h5 class="card-title fw-bold fs-3">${tool.name}</h5>
                    <div class="d-flex align-items-center gap-2">
                        <img src="images/calandar-icon.png" alt="">
                        <p class="text-secondary fw-medium m-0">${tool.published_in}</p>
                    </div>
                </div>
                <!-- Button trigger modal -->
                <button onclick="loadDataDetails('${tool.id}')" class="border-0 p-3 rounded-5 bg-danger-subtle opacity-75" data-bs-toggle="modal" data-bs-target="#exampleModal"><img src="images/Vector.png" alt=""></button>
            </div>
        `
        cardContainer.appendChild(cardDiv);
    });
    setTimeout(showSpinner(false), 2000);
}

const showSpinner = isShow => {
    const spinner = document.getElementById('spinner');
    if (isShow) {
        spinner.classList.remove('d-none');
        // console.log('spinner is on')
    } else {
        spinner.classList.add('d-none');
        // console.log('spinner is off')
    }
}

loadData();

const showModalData = data => {
    console.log(data);
    //modal body
    const modalBody = document.getElementById('modal-body');
    modalBody.innerHTML = '';
    //left card
    const leftDiv = document.createElement('div');
    leftDiv.classList.add('card', 'p-3', 'rounded', 'rounded-4', 'col', 'position-relative', 'border', 'border-2', 'border-danger-subtle', 'bg-danger', 'bg-opacity-10');
    leftDiv.innerHTML = `
    <div class="card-body p-0 py-2">
        <h5 class="card-title fw-bold fs-6">${data.description}</h5>
        <div class="d-flex flex-column flex-sm-row gap-3 text-center my-5">
            <div class="p-4 bg-white rounded rounded-4">
                <small class="text-success fw-bold m-0">${data.pricing[0].price} ${data.pricing[0].plan}</small>
            </div>
            <div class="p-4 bg-white rounded rounded-4">
                <small class="text-warning fw-bold m-0">${data.pricing[1].price} ${data.pricing[1].plan}</small>
            </div>
            <div class="p-4 bg-white rounded rounded-4">
                <small class="text-danger fw-bold m-0">${data.pricing[2].price} ${data.pricing[2].plan}</small>
            </div>
        </div>
        <div class="d-flex flex-column flex-sm-row">
            <div>
                <h5 class="card-title fw-bold fs-6">Features</h5>
                <ul class="card-text fs-6 text-secondary">
                    <li><small>${data.features[1].feature_name}</small></li>
                    <li><small>${data.features[2].feature_name}</small></li>
                    <li><small>${data.features[3].feature_name}</small></li>
                </ul>
            </div>
            <div>
                <h5 class="card-title fw-bold fs-6">Integrations</h5>
                <ul class="card-text fs-6 text-secondary">
                    <li><small>${data.integrations[0] ? data.integrations[0] : 'No data found'}</small></li>
                    <li><small>${data.integrations[1] ? data.integrations[1] : 'No data found'}</small></li>
                    <li><small>${data.integrations[2] ? data.integrations[2] : 'No data found'}</small></li>
                </ul>
            </div>
        </div>
    </div>
    `
    modalBody.appendChild(leftDiv);

    //right card
    const rightDiv = document.createElement('div');
    rightDiv.classList.add('card', 'p-3', 'rounded', 'rounded-4', 'col', 'position-relative');
    rightDiv.innerHTML = `
    <div class="card p-3 rounded rounded-4 col position-relative">
        <div class="bg-danger text-white px-3 py-1 rounded rounded-3 position-absolute"
            style="top: 24px; right: 24px;">
            <small>${data.accuracy.score * 100 ? data.accuracy.score * 100 + '% accuracy' : ''}</small>
        </div>
        <img src="${data.image_link[0]}" class="card-img-top" alt="...">
        <div class="card-body p-0 py-4 text-center">
            <h5 class="card-title fw-bold fs-3">${data.input_output_examples[0].input}</h5>
            <p class="card-text">${data.input_output_examples[0].output}</p>
        </div>
    </div>
    `
    modalBody.appendChild(rightDiv);

}

const loadDataDetails = async (id) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/ai/tool/${id}`);
    const data = await res.json();
    showModalData(data.data);

}

