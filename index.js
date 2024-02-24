document.addEventListener('DOMContentLoaded', () => {
    document.querySelector(`input[checked]`).dispatchEvent(new Event('change'));
});




document.querySelectorAll('#categoryContainer input[type="radio"]').forEach(element => {
    element.addEventListener('change', e => {
        const options = document.querySelectorAll(`#optionsContainer input[name=${e.target.value}]`);
        const selected = e.target.value;
        document.querySelectorAll(`#optionsContainer input[type="radio"]`).forEach(option => {
            if(option.getAttribute('name') === selected) {
                option.closest('.radio-container').classList.remove('d-none');
            }
            else {
                option.closest('.radio-container').classList.add('d-none');
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