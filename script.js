document.addEventListener("DOMContentLoaded", function () {

    const subscribeBtn = document.getElementById("subscribeBtn");
    const subscribeSection = document.getElementById("subscribeSection");
    const registerSection = document.getElementById("registerSection");
    const registerBtn = document.querySelector(".registerBtn");

    // If already clicked before
    if (localStorage.getItem("clickedSubscribe") === "true") {
        subscribeSection.style.display = "none";
        registerSection.style.display = "block";

        setTimeout(() => {
            registerBtn.classList.add("show");
        }, 200);
    }

    // When Subscribe is clicked
    subscribeBtn.addEventListener("click", function () {
        localStorage.setItem("clickedSubscribe", "true");
    });

});
