const imgs = document.querySelectorAll('img[data-src]');

const observer = new IntersectionObserver(onEntry)

function onEntry(entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            preloadImage(entry.target);
            observer.unobserve(entry.target);
        }
    });
}

function preloadImage(img) {
    const src = img.getAttribute('data-src');
    if (!src) {
        return
    } else {
        img.src = src;
        img.classList.add('show')
    }
}

imgs.forEach(img => {
    observer.observe(img);
})