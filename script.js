document.addEventListener("DOMContentLoaded", function () {

    const subscribeBtn = document.getElementById("subscribeBtn");
    const subscribeSection = document.getElementById("subscribeSection");
    const registerSection = document.getElementById("registerSection");
    const registerBtn = document.querySelector(".registerBtn");

    // When Subscribe is clicked
    subscribeBtn.addEventListener("click", function () {

        // Save click
        localStorage.setItem("clickedSubscribe", "true");

        // Hide Subscribe Section
        subscribeSection.style.display = "none";

        // Show Register Section instantly
        registerSection.style.display = "block";

        setTimeout(() => {
            registerBtn.classList.add("show");
        }, 200);
    });

});