document.addEventListener("DOMContentLoaded", function() {
    const contactInfoTitles = document.querySelectorAll(".contactInfo .title");
    const contactInfoLists = document.querySelectorAll(".contactInfo ul");

    contactInfoTitles.forEach((title, index) => {
        title.addEventListener("click", function() {
            contactInfoLists[index].classList.toggle("hidden");
        });
    });
});

function animateBars(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const bar = entry.target;
            const width = bar.getAttribute("data-width");
            bar.style.transition = "width 1s ease-in-out";
            bar.style.width = width;
            observer.unobserve(bar); 
        }
    });
}

const observer = new IntersectionObserver(animateBars, {
    threshold: 0.5 
});


document.addEventListener("DOMContentLoaded", function() {
    const skillBars = document.querySelectorAll(".skills .box .percent div");
    skillBars.forEach(bar => {
        const originalWidth = bar.style.width; 
        bar.style.width = "0"; 
        bar.setAttribute("data-width", originalWidth); 
        observer.observe(bar);
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const languageBars = document.querySelectorAll(".contactInfo.language .percent div");
    languageBars.forEach(bar => {
        const originalWidth = bar.style.width; 
        bar.style.width = "0"; 
        bar.setAttribute("data-width", originalWidth); 
        observer.observe(bar);
    });
});
