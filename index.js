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

document.getElementById('btnSave').addEventListener('click', async e => {
    const canvas = await html2canvas(document.querySelector('.image-container'));
    console.log('canvas', canvas);
    //saveAs(canvas.toDataURL(), 'file-name.png');
    document.body.appendChild(canvas);

    // const c = document.querySelector('canvas');
    // const anchor = document.createElement("a");
    // anchor.href = c.toDataURL("image/png");
    // anchor.download = "IMAGE.PNG";
    // anchor.click();


    // let node = document.querySelector('.image-container');
    // new Promise((resolve, reject) => {
    //     node.style.borderRadius = "0px";
    // }).then(html2canvas(node, {scale: 2}).then(function (canvas) {
    //     document.body.appendChild(canvas);
    //     let a = document.createElement("a");
    //     a.href = canvas.toDataURL();
    //     a.download = "alpaca";
    //     a.id = "download-link";
    //     document.body.appendChild(a);
    //     a.click();
    //     node.style.borderRadius = "16px";
    // }));

});

function saveAs(uri, filename) {

    var link = document.createElement('a');

    if (typeof link.download === 'string') {

        link.href = uri;
        link.download = filename;

        //Firefox requires the link to be in the body
        document.body.appendChild(link);

        //simulate click
        link.click();

        //remove the link when done
        document.body.removeChild(link);

    } else {

        window.open(uri);

    }
}