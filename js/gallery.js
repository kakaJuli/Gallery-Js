const gallery = function() {
    let elem = document.querySelectorAll('[data-slider]');
    if (!elem || elem/length == 0) return;
    elem = Array.from(elem);

    const creste = function(content) {
        let elem = document.querySelector ('galerry__content');
        if (elem) elem.remove();

        let elemContent = document.createElement('div');
        elemContent.classList.add('gallery__content');
        elemContent.innerHTML = content;

        if (!elemContent) return;

        let elemExet = document.createElement('button');
        elemExet.classList.add('gallery__exet');
        elemExet.innerHTML = 'X';

        document.body.append(elemContent);
        elemContent.append(elemExet);

        elemExet.addEventListener('click', close);

        return elemOverlay; // Посмотреть


    }

    const close = function (event) {
        if (!event.target.classList.contains('gallery__exet') && !event.target.classList.contains('gallery__content')) return;

        let elem = document.querySelector('gallery__content');
        if (elem) elem.remove();
    }

    const show = function (event) {

        event.preventDefault();
        let elem = event.target;

    }
}