const email = document.querySelector('#email');
const city = document.querySelector('#city');
const zipCode = document.querySelector('#zipCode');
const country = document.querySelector("#country")
const form = document.querySelector('#form');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateEmail();
    validateCountry();
    validateCity();
    validateZipCode();

    email.addEventListener ("keyup", validateEmail);
    country.addEventListener("blur", validateCountry)
    city.addEventListener ("keyup", validateCity)
    zipCode.addEventListener ("keyup", validateZipCode);

    if (!email.classList.contains('inputError') &&
        !country.classList.contains('inputError') &&
        !city.classList.contains('inputError') &&
        !zipCode.classList.contains('inputError')) {
            location.href = form.getAttribute("action");
    } 
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    element.classList.add('inputError')
    inputControl.classList.add('error')
}

const setSucsess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    element.classList.remove('inputError')
    inputControl.classList.remove('error');
}

function validateEmail() {
    const emailValue = email.value.trim();
    if (emailValue === '') {
        setError (email, "Required")
        return false
    } else if (!emailValue.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
        setError(email, "Please enter a valid email")
        return false
    } else if (!emailValue.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[ge]{2,}))$/)){
        setError(email, "Domain should be (.ge)")
        return false
    } else {
        setSucsess(email)
    }
    return true;
}

function validateCountry() {
    const countryValue = country.value;
    if (countryValue === "0" ) {
        setError (country, "Required")
        return false
    } else {
        setSucsess(country)
    }
    return true
}

function validateCity() {
    const cityValue = city.value.trim();
    if (cityValue === '') {
        setError(city, 'Required')
        return false
    } else {
        setSucsess(city)
    }
    return true
}

function validateZipCode() {
    const zipCodeValue = zipCode.value.trim();
    if (zipCodeValue === '') {
        setError(zipCode, 'Required')
        return false
    } else if (!zipCodeValue.match(/^[0-9]+$/)){
        setError(zipCode, 'Only numbers')
        return false
    } else {
        setSucsess (zipCode)
    }
    return true
}
    