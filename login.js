let loginBtn = document.getElementById('login-btn');
let phoneNum = document.getElementById('phone-number');
let pinNum = document.getElementById('pin-number');


loginBtn.addEventListener('click', function (event) {
    event.preventDefault();

    const phoneNumV = phoneNum.value;
    const pinNumV = pinNum.value;

    if (phoneNumV === '01812345678' && pinNumV === '1234') {
        window.location.href = '/index.html';
    } else {
        alert('Your Phone Number or Pin is Wrong. Please Try Again Later.');
    }

});
