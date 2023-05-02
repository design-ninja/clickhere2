
// Scroll to Jobs section on header button click

window.onload = function() {
    scrollTo = (element) => {
        window.scroll({
            left: 0,
            top: element.offsetTop,
            behavior: "smooth"
        });
        console
    }

    document.getElementById("toAbout").addEventListener('click', () => {
        scrollTo(document.getElementById("about"));
    });

    document.getElementById("toServices").addEventListener('click', () => {
        scrollTo(document.getElementById("services"));
    });
      
    document.getElementById("toJobs").addEventListener('click', () => {
        scrollTo(document.getElementById("jobs"));
    });

    document.getElementById("toContact").addEventListener('click', () => {
        scrollTo(document.getElementById("contact"));
    });
  }


// Buttons events

const name = 'cl-he';
const domain = 'com';

function action(text) {
    window.location.href=`mailto:${text}@${name}.${domain}`;
}