// Select the class bubble
time = document.getElementsByClassName('bubbles')[0];

// Change bubble animation for mobile view
if (screen.width < 400) {
    time.style.setProperty('--transform-duration', '15s')
    time.style.setProperty('--transform-y', '-700vh')
}

// Capture initial fish positions so we can move them vertically
const fishBaseTops = [fish1, fish2, fish3, fish4].map((fish) => parseFloat(getComputedStyle(fish).top));

// Vertical speeds (px per scroll unit); slightly faster on small screens
const fishSpeeds = screen.width < 400 ? [0.35, 0.4, 0.45, 0.5] : [0.18, 0.22, 0.26, 0.3];



window.addEventListener('scroll', function () {

    let value = window.scrollY;   //Get Scroll Value (Mobile - High)

    text.style.top = 50 + value * -0.2 + '%';
    cloud.style.left = value * 2 + 'px';

    bird1.style.top = value * 0.1 + 'px';
    bird1.style.left = value * 1 + 'px';

    bird2.style.top = value * -0.1 + 'px';
    bird2.style.left = value * -2 + 'px';

    explore.style.marginTop = value * 1.5 + 'px';

    rocks.style.top = value * -0.14 + 'px';

    forest.style.top = value * 0.4 + 'px';
    sky.style.top = value * 0.25 + 'px';
    mountains.style.top = value * 0.25 + 'px';

    header.style.top = value * 0.7 + 'px';
    sun.style.top = value * 1 + 'px';

    //To prevent splash to move above sea water
    if (value < 380) {
        splash.style.top = 20 + value * -0.3 + 'px';
    }

    // Move fishes vertically (bottom to top)
    fish1.style.top = fishBaseTops[0] - value * fishSpeeds[0] + 'px';
    fish2.style.top = fishBaseTops[1] - value * fishSpeeds[1] + 'px';
    fish3.style.top = fishBaseTops[2] - value * fishSpeeds[2] + 'px';
    fish4.style.top = fishBaseTops[3] - value * fishSpeeds[3] + 'px';
})


// Contains the link for all social media handles
var links = document.getElementsByClassName("social-media");

links[0].addEventListener("click", () => { openlink(1) });
links[1].addEventListener("click", () => { openlink(2) });
links[2].addEventListener("click", () => { openlink(3) });
links[3].addEventListener("click", () => { openlink(4) });

function openlink(x) {
    if (x == 1) {
        window.open("https://www.instagram.com/_.vini._02_/", "_blank");
    }
    if (x == 2) {
        window.open("https://www.linkedin.com/in/vineet-kumar-gupta-2833ab196/", "_blank");
    }
    if (x == 3) {
        window.open("https://github.com/VineetKumar02", "_blank");
    }
    if (x == 4) {
        window.open("https://vineet-portfolio-site.netlify.app/", "_blank");
    }
}
