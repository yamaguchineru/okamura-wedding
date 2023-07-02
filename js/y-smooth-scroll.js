var links = document.querySelectorAll('a.smooth-scroll');

function linkClickListener(event) {
    event.preventDefault();
    var href = this.getAttribute('href');
    var targetElement = document.querySelector(href);
    var rect = targetElement.getBoundingClientRect();
    var y = rect.top + window.scrollY;

    window.scrollTo({
        top: y,
        behavior: 'smooth'
    });
}

for (var i = 0; i < links.length; i++) {
    links[i].addEventListener('click', linkClickListener);
}