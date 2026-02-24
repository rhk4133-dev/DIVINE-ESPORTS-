document.addEventListener("DOMContentLoaded", function(){

    const subscribeBtn = document.getElementById("subscribeBtn");
    const subscribeSection = document.getElementById("subscribeSection");
    const registerSection = document.getElementById("registerSection");
    const verification = document.getElementById("verification");

    let waitingForReturn = false;

    // When Subscribe button is clicked
    subscribeBtn.addEventListener("click", function(){

        verification.innerHTML = "Redirecting to YouTube...";

        waitingForReturn = true;

        // Open YouTube in new tab
        window.open("https://www.youtube.com/@divineesport?sub_confirmation=1", "_blank");
    });

    // Detect when user returns to this tab
    window.addEventListener("focus", function(){

        if(waitingForReturn){

            verification.innerHTML = "Subscription Verified ✅";

            confetti({
                particleCount: 120,
                spread: 90,
                origin: { y: 0.6 }
            });

            setTimeout(()=>{
                subscribeSection.style.display="none";
                registerSection.classList.remove("hidden");
            },1500);

            waitingForReturn = false;
        }

    });

});