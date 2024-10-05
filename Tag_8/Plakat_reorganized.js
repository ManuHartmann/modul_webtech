// Cursor
// var xp = 0,
//   mouseX = 0;
// var yp = 0,
//   mouseY = 0;
// var xpDot = 0,
//   mouseX = 0;
// var ypDot = 0,
//   mouseY = 0;

// const cursorFollower = document.querySelector(".cursorFollower");
// const cursorFollowerDot = document.querySelector(".cursorFollowerDot");

// document.addEventListener("mousemove", (e) => {
//   mouseX = e.pageX;
//   mouseY = e.pageY;
// });

// setInterval(function () {
//   xp += (mouseX - xp) / 15;
//   yp += (mouseY - yp) / 15;

//   cursorFollower.style.left = xp + "px";
//   cursorFollower.style.top = yp + "px";
// }, 20);

// setInterval(function () {
//   xpDot += (mouseX - xpDot) / 25;
//   ypDot += (mouseY - ypDot) / 25;

//   cursorFollowerDot.style.left = xpDot + "px";
//   cursorFollowerDot.style.top = ypDot + "px";
// }, 20);

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

