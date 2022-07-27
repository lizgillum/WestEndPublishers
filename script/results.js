function validate() {
    const email = document.myForm.email.value;

    const regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g; 

    if (email == "" || !regEmail.test(email)) {
        window.alert("Please enter a valid e-mail address.");
        email.focus();
        return false;
    }

    return true;
} 

function display() {
    const firstName = document.myForm.firstName.value;

    alert("Thank you, " + firstName + "! You are now signed up for our newsletter!");
};

document.getElementById("myForm").onsubmit = function() {validate()};

document.getElementById("myForm").onsubmit = function() {display()};