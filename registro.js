const   btniniciar = document.getElementById("iniciar"),
        btnregistrar = document.getElementById("registrarse"),
        formregister = document.querySelector(".register"),
        formlogin = document.querySelector(".login");

    btniniciar.addEventListener("click", e => {
        formregister.classList.add("hide");
        formlogin.classList.remove("hide")
    })

    btnregistrar.addEventListener("click", e => {
        formlogin.classList.add("hide");
        formregister.classList.remove("hide")
    })