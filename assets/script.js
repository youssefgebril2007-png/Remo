const surpriseButton = document.getElementById("surpriseButton");
const secretMessage = document.getElementById("secretMessage");
const photoGallery = document.getElementById("photoGallery");

surpriseButton.addEventListener("click", function () {
    if (secretMessage.hidden) {
        secretMessage.hidden = false;

        if (photoGallery) {
            photoGallery.hidden = false;
        }

        surpriseButton.textContent = "A Little More Love! 💗";

        // Celebrate with floating hearts
        for (let i = 0; i < 24; i++) {
            createHeart();
        }
    } else {
        // Celebrate again without hiding the surprise
        for (let i = 0; i < 12; i++) {
            createHeart();
        }
    }
});

function createHeart() {
    const heart = document.createElement("span");

    const symbols = ["💗", "💕", "💖", "✨", "💝"];

    heart.textContent = symbols[
        Math.floor(Math.random() * symbols.length)
    ];

    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.bottom = "-40px";
    heart.style.fontSize = (18 + Math.random() * 20) + "px";
    heart.style.pointerEvents = "none";
    heart.style.zIndex = "9999";
    heart.style.transition =
        "transform 3s ease-out, opacity 3s ease-out";

    document.body.appendChild(heart);

    requestAnimationFrame(() => {
        heart.style.transform =
            `translateY(-${window.innerHeight + 100}px) rotate(${Math.random() * 100 - 50}deg)`;
        heart.style.opacity = "0";
    });

    setTimeout(() => {
        heart.remove();
    }, 3200);
}