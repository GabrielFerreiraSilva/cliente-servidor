function submitForm(){
    const login = document.getElementById("login").value;
    const password = document.getElementById("pass").value;

    const user = {login, password}

    fetch("http://localhost:3500/login", {
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(user)
    })
    .then(response => response.text())
    .then(responseText => alert(responseText))

    const form = document.querySelector(".login-form");
    form.reset();
}