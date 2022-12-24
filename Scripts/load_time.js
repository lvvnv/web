(() => {
    let startTime = new Date().getTime();
    window.addEventListener('load', () => {
        let endTime = new Date().getTime();
        let element = document.querySelector('.footer__item_time');
        element.innerHTML = "Page load time: " + (endTime - startTime) + "ms"
    })
})()