
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
      
    document.getElementById("toJobs").addEventListener('click', () => {
        scrollTo(document.getElementById("jobs"));
    });
  }


// Buttons events

const name = 'cl-he';
const domain = 'com';

function action(text) {
    window.location.href=`mailto:${text}@${name}.${domain}`;
}