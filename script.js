document.addEventListener("DOMContentLoaded", function(){

    const subscribeBtn = document.getElementById("subscribeBtn");
    const subscribeSection = document.getElementById("subscribeSection");
    const registerSection = document.getElementById("registerSection");
    const verification = document.getElementById("verification");
    const loader = document.getElementById("loader");

    /* ================= LOADER ================= */

    window.addEventListener("load", () => {
        setTimeout(()=>{
            loader.classList.add("hidden");
        },1000);
    });

    /* ================= REAL SUBSCRIBE FLOW ================= */

    // Check if user came back from YouTube
    if(localStorage.getItem("subscribed") === "true"){
        subscribeSection.style.display="none";
        registerSection.classList.remove("hidden");
    }

    subscribeBtn.addEventListener("click", function(){

        verification.innerHTML = "Redirecting to YouTube...";

        localStorage.setItem("subscribed","true");

        setTimeout(()=>{
            window.open("https://youtube.com/@divineesport-q9f","_blank");
            verification.innerHTML = "After subscribing, return to unlock registration.";
        },1000);
    });

});