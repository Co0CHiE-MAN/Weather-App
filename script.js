const wrapper = document.querySelector('.wrapper');
inputBox = wrapper.querySelector('.input-box');
infoText = inputBox.querySelector('.info-txt');
inputField = inputBox.querySelector('input');
locationBtn = inputBox.querySelector('button')

inputField.addEventListener('keyup', e => {
    if (e.key == 'Enter' && inputField.value != "") {
        // console.log(inputField.value)
        requestApi(inputField.value);
    }
});

locationBtn.addEventListener('click', () => {
    if (navigator.geolocation) { // if browser support geolocation api
        navigator.geolocation.getCurrentPosition(onSuccess, onError);
    } else {
        alert("Your browser do not support geolocation Api")
    }
    // console.log("Get location button pressed")
});

const onSuccess = (position) => {
    console.log(position)
};

const onError = (error) => {
    console.log(error)
};

const requestApi = (city) => {
    const apikey = "00278ddfb583d66cf4c1b202aeb0b1e2"
    let api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;
    infoText.innerText = 'Getting Weather details...';
    infoText.classList.add("pending");
    fetch(api).then(response => response.json()).then(result => weatherDetails(result));
}

const weatherDetails = (info) => {
    console.log(info);
}