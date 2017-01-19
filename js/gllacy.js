
    var link = document.querySelector(".feedback-btn");
    var popup = document.querySelector(".modal-content");
    var close = document.querySelector(".modal-content-close");
    var closeOverlay = document.querySelector(".modal-overlay");
    var overlay = document.querySelector(".modal-overlay");
    var loginLInk = document.querySelector(".login-btn");
    var login = document.getElementById("email");
    var password = document.getElementById("password");
    var loginForm = document.querySelector(".login-form");
    var storage = localStorage.getItem("login");


    link.addEventListener("click", function(event) {
        event.preventDefault();
        popup.classList.add("modal-content-show");
        popup.classList.add("show-animation");
        overlay.classList.add("modal-overlay-show");
    });
    close.addEventListener('click', function(event) {
        event.preventDefault();
        popup.classList.remove("modal-content-show");
        closeOverlay.classList.remove("modal-overlay-show");
    });
    overlay.addEventListener("click", function(event) {
        event.preventDefault();
        overlay.classList.remove("modal-content-show");
    });
    closeOverlay.addEventListener("click", function(event) {
        event.preventDefault();
        closeOverlay.classList.remove("modal-overlay-show");
        popup.classList.remove("modal-content-show");
    });
    loginLInk.addEventListener("click",function(event) {
        event.preventDefault();
        if (storage) {
          login.value = storage;
          login.focus();
        }
        else {
            login.focus();
        }
    });
    loginForm.addEventListener("submit", function(event) {
        if (!login.value || !password.value) {
            event.preventDefault();
        }
        else {
            localStorage.setItem("login", login.value);
        }
    });
