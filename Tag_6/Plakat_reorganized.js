const title = document.getElementById('title')

// Initialize the Typewriter effect for the title
const titleTypewriter = new Typewriter(title, {
    loop: false,
    delay: 20,
    deleteSpeed: 25,
    cursor: "|"
});

titleTypewriter.typeString("Kunstgewerbemuseum Zürich<br /> Ausstellung").start()

// Initialize the Typewriter effect for the opening hours
const openingHours = document.getElementById('opening-hours')

const openingHoursTypewriter = new Typewriter(openingHours, {
    loop: false,
    delay: 20,
    deleteSpeed: 25,
    autoStart: true,
    cursor: "|"
});

openingHoursTypewriter.typeString("10. Januar bis 30. April 1960<br />Offen: Montag 14–18, 20–22<br />Dienstag–Freitag 10–12, 14–18, 20–22<br />Samstag–Sonntag 10–12, 14–17").callFunction(() => {
    // hide the cursor after typing is done
    let cursor2 = document.querySelector('.Typewriter__cursor');
    if (cursor2) {
        cursor2.style.visibility = 'hidden';
    }
}).start()

