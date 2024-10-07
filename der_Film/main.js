//------ Cursor

let mouseX = 0, mouseY = 0;
let cursorX = 0, cursorY = 0;
const delay = 0.1;

document.addEventListener('mousemove', (e) => {
    mouseX = e.pageX;
    mouseY = e.pageY;
});

const cursor = document.getElementById('cursor');

 // Smoothly move the custom cursor towards the real mouse position
function updateCursor() {
    cursorX += (mouseX - cursorX) * delay;
    cursorY += (mouseY - cursorY) * delay;

    cursor.style.transform = `translate(${cursorX - 10}px, ${cursorY - 10}px)`;

    requestAnimationFrame(updateCursor);
}

// Click event to animate the cursor size change
document.addEventListener('click', () => {
    // Make cursor bigger
    cursor.style.width = '20px';
    cursor.style.height = '20px';
    cursor.style.transform = `translate(${cursorX - 10}px, ${cursorY - 10}px)`;

    // After 200ms, return to the original size
    setTimeout(() => {
        cursor.style.width = '15px'; 
        cursor.style.height = '15px';
        cursor.style.transform = `translate(${cursorX - 10}px, ${cursorY - 10}px)`;
    }, 200);
});

// Call updateCursor to start the animation loop
updateCursor();


//------Typewriter effect

const title = document.getElementById('title')

// Initialize the Typewriter effect for the title
const titleTypewriter = new Typewriter(title, {
    loop: false,
    delay: 50,
    deleteSpeed: 25,
    cursor: "|"
});

titleTypewriter.typeString("Kunstgewerbemuseum Zürich<br /> Ausstellung").start()

// Initialize the Typewriter effect for the opening hours
const openingHours = document.getElementById('opening-hours')

const openingHoursTypewriter = new Typewriter(openingHours, {
    loop: false,
    delay: 50,
    deleteSpeed: 25,
    autoStart: true,
    cursor: "|"
});

openingHoursTypewriter.typeString("10. Januar bis 30. April 1960<br /><br />Offen: Montag 14–18, 20–22<br />Dienstag–Freitag 10–12, 14–18, 20–22<br />Samstag–Sonntag 10–12, 14–17").callFunction(() => {
    // hide the cursor after typing is done
    let cursor2 = document.querySelector('.Typewriter__cursor');
    if (cursor2) {
        cursor2.style.visibility = 'hidden';
    }
}).start()