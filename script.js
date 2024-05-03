let userEmail;

const emailIsValid = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

function submitForm(e) {
    e.preventDefault();

    let isEmailValid = emailIsValid(userEmail);

    if (!isEmailValid) {
        errorMessage.textContent = "Valid email required"
        userInput.classList.add("invalid");

    }
    else {
        userInput.classList.remove("invalid");
        errorMessage.textContent = ""
        const textField = document.querySelector(".confirmation_text");

        textField.innerHTML = `<p>A confirmation email has been sent to <span>${userEmail}</span>. Please
        open it and click the button inside to confirm your subscription.</p>`

        signUp.style.display = "none";
        succes.style.display = "flex";

    }
}

function closeSuccesfullSignUp() {

    signUp.style.display = "flex";
    succes.style.display = "none";

}

const errorMessage = document.querySelector(".err_msg")
const signUp = document.querySelector(".sign-up");
const succes = document.querySelector(".submit_succes");

const userInput = document.querySelector(".email-input");
userInput.addEventListener("input", (e) => userEmail = e.target.value);

const submitButton = document.querySelector(".submit-button");
submitButton.addEventListener("click", (e) => submitForm(e));

const dismissButton = document.querySelector(".dismiss-button");
dismissButton.addEventListener("click", closeSuccesfullSignUp);