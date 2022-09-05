let id = (id) => document.getElementById(id);
let username = id("username");
let email = id("email");
let password = id("password");

let classes = (classes) => document.getElementsByClassName(classes);
let errormsg = classes('error');
let successIcon = classes("success-icon");
let failureIcon = classes("failure-icon");

let form = id("form");
form.addEventListener('click', (e) => {
    e.preventDefault();
    engine(username, 0, "Username cannot be blank");
    engine(email, 1, "Email cannot be blank");
    engine(password, 2, "Password cannot be blank");
});
let engine = (id, serial, message) => {
    if (id.value === '') {
        errormsg[serial].innerHTML = message;
        failureIcon[serial].style.opacity = '1';
        successIcon[serial].style.opacity = '0';

    }
    else {
        errormsg[serial].innerHTML = "";
        successIcon[serial].style.opacity = '1';
        failureIcon[serial].style.opacity = '0';
    }
}
