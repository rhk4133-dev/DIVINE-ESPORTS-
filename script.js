document.addEventListener("DOMContentLoaded", function(){

    const subscribeBtn = document.getElementById("subscribeBtn");
    const subscribeSection = document.getElementById("subscribeSection");
    const registerSection = document.getElementById("registerSection");
    const verification = document.getElementById("verification");

    // If already subscribed before
    if(localStorage.getItem("subscribed") === "true"){
        subscribeSection.style.display="none";
        registerSection.classList.remove("hidden");
    }

    subscribeBtn.addEventListener("click", function(){

        verification.innerHTML = "Opening YouTube...";

        // Save subscription status
        localStorage.setItem("subscribed", "true");

        // Small delay to allow YouTube open
        setTimeout(() => {
            subscribeSection.style.display="none";
            registerSection.classList.remove("hidden");

            confetti({
                particleCount: 120,
                spread: 90,
                origin: { y: 0.6 }
            });

        },1500);
    });

});