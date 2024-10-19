document.querySelectorAll('#categoryContainer input[type="radio"]').forEach(element => {
    element.addEventListener('change', e => {
        const options = document.querySelectorAll(`#optionsContainer input[name=${e.target.value}]`);
        const selected = e.target.value;
        document.querySelectorAll(`#optionsContainer input[type="radio"]`).forEach(option => {
            if(option.getAttribute('name') === selected) {
                option.parentElement.classList.remove('d-none');
            }
            else {
                option.parentElement.classList.add('d-none');
            }
        });
    });
});

document.querySelectorAll('#optionsContainer input[type="radio"]').forEach(element => {

    element.addEventListener('change', e => {
        const name = e.target.getAttribute('name');
        const value = e.target.value;

        const imgPath = `./assets/alpaca/${name}/${value}`;


        const img = document.querySelector(`.image-container img[data-category="${name}"]`)
        img.src = imgPath;
    });
});

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector(`input[checked]`).dispatchEvent(new Event('change'));
});

document.getElementById('btnRandom').addEventListener('click', e => {
    const categories = [...document.querySelectorAll('#categoryContainer [type="radio"]')].map(a => a.value);

    categories.forEach(category => {
        const optionIds = [...document.querySelectorAll(`#optionsContainer input[name="${category}"]`)].map(a => a.id);
        const randomOptionElementId = optionIds[Math.floor(Math.random() * optionIds.length)];
        
        const randomOptionElement = document.getElementById(randomOptionElementId);
        randomOptionElement.checked = true
        randomOptionElement.dispatchEvent(new Event('change'))
    });
});