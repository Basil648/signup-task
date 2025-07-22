const fullname = document.getElementById("fullname")
const emailid = document.getElementById("emailid")
const pass = document.getElementById("pass")
const conpass = document.getElementById("cpass")
const checbox = document.getElementById("terms")

const  form = document.getElementById("forms")
 form.addEventListener("submit", (event) => {
    event.preventDefault()

    if (fullname.value.trim() === "" || !isNaN(fullname.value.trim())) {
        document.getElementById("errorname").textContent = "invalid username!!"
    }

    const emailcheck = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailcheck.test(emailid.value.trim())) {
        document.getElementById("erroremail").textContent = "invalid email format"
    }

    const passRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/;

    if (!passRegex.test(pass.value.trim())) {
        document.getElementById("errorpass").textContent =
            "Password must be 8-15 characters,with letters, numbers, and at least one symbol.";


    }

    if (pass.value.trim() != conpass.value.trim()) {
        document.getElementById("errorcpass").textContent = "passwords do not match"
    }

    if (!checbox.checked) {
        document.getElementById("errorcheck").textContent = "agree to the terms and conditions before continuing !!"
    }


    if (
        fullname.value.trim() !== "" &&
        isNaN(fullname.value.trim()) &&
        emailcheck.test(emailid.value.trim()) &&
        passRegex.test(pass.value.trim()) &&
        pass.value.trim() === conpass.value.trim() &&
        checbox.checked
    ) {
        document.getElementById("success").textContent = "Form submitted successfully!";
    }
})

