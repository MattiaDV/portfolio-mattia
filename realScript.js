document.addEventListener("scroll", function() {
    let elements = document.querySelectorAll(".hidden");
    let windowHeight = window.innerHeight;
    
    elements.forEach(el => {
        let position = el.getBoundingClientRect().top;
        if (position < windowHeight - 100) {
            el.classList.add("show");
        }
    });
});

document.addEventListener("scroll", function() {
    let text = document.querySelector(".typing");
    if (text.getBoundingClientRect().top < window.innerHeight - 100) {
        text.style.animation = "typing 2s steps(20, end) forwards";
    }
});

gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".section").forEach(section => {
    gsap.to(section, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none reverse"
        }
    });
});


document.addEventListener("click", createRipple);
document.addEventListener("touchstart", createRipple);

function createRipple(event) {
    const ripple = document.createElement("span");
    ripple.classList.add("ripple");

    // Per gestire tocco su mobile
    const x = (event.touches ? event.touches[0].clientX : event.clientX);
    const y = (event.touches ? event.touches[0].clientY : event.clientY);

    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;

    document.body.appendChild(ripple);

    setTimeout(() => {
        ripple.remove();
    }, 700); // Rimuove l'effetto dopo 700ms
}