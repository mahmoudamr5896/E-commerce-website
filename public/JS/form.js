const loader = document.querySelector('.loader');

// select inputs 
const submitBtn = document.querySelector('.submit-btn');
const name = document.querySelector('#name') || null;
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const number = document.querySelector('#number') || null;
const tac = document.querySelector('#terms-and-cond') || null;
const notification = document.querySelector('#notification') || null;

 const mailRegex = /^[a-zA-Z0-9._%+-]+@(yahoo|hotmail|gmail)+\.com$/g;
 const nameRegex = /^[a-zA-Z]{3,}(\s[a-zA-Z]{3,})+$/g;    
submitBtn.addEventListener('click', () => {
    if(name != null){

    
    if(!name.value.match(nameRegex)){
        showAlert('Please enter your full name 3 letters each');
    } else if(!email.value.match(mailRegex)){
        showAlert('Please enter your email like name@domain.com');
    } else if(password.value.length < 8){
        showAlert('Your password should be 8 letters long minimum');
    } else if(!number.value.length){
        showAlert('Please enter your phone number');
    } else if(!Number(number.value) || number.value.length < 10){
        showAlert('Invalid number, please enter a valid one');
    } else if(!tac.checked){
        showAlert('Please read our terms and conditions then agree');
    } else{
        // submit form
        loader.style.display = 'block';
        sendData('/signup', {
            name: name.value,
            email: email.value,
            password: password.value,
            number: number.value,
            tac: tac.checked,
            notification: notification.checked,
            seller: false
        })
    }
}else{

        if(!email.value.length || !password.value.length){
            showAlert('Please fill the inputs')
        }else{
            loader.style.display = 'block';
        sendData('/login', {
            email: email.value,
            password: password.value,
        })
        }
}
})

// alert function
const showAlert = (msg) => {
    let alertBox = document.querySelector('.alert-box');
    let alertMsg = document.querySelector('.alert-msg');
    alertMsg.innerHTML = msg;
    alertBox.classList.add('show');
    setTimeout(() => {
        alertBox.classList.remove('show');
    }, 3000);
}

// send data function
const sendData = (path, data) => {
    fetch(path, {
        method: 'post',
        headers: new Headers({'Content-Type': 'application/json'}),
        body: JSON.stringify(data)
    }).then((res) => res.json())
    .then(response => {
        processData(response);
    })
}

const processData = (data) => {
    loader.style.display = null;
    if(data.alert){
        showAlert(data.alert);
    } else if(data.name){
        // create authToken
        data.authToken = generateToken(data.email);
        sessionStorage.user = JSON.stringify(data);
        location.replace('/');
    }
}