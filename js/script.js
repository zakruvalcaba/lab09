let timer = null;
let counter = 20;

const $ = (id) => {
    return document.getElementById(id);
};

window.addEventListener('load', () => {
    timer = setInterval(goToTerms, 1000);
    $('accept').addEventListener('click', acceptTerms);
});

function goToTerms() {
    counter--;
    if (counter === 0) {
        window.location.href = 'terms.html';
    } else {
        $('seconds').innerHTML = counter;
    }
}

function acceptTerms() {
    clearInterval(timer);
    $('terms').innerHTML = "Thank you for accepting the terms of service.";
}