(() => {
    let startTime = new Date().getTime();
    window.addEventListener('load', () => {
        let endTime = new Date().getTime();
        let element = document.querySelector('.load_time');
        element.innerHTML = "Page load time: " + (endTime - startTime) + "ms"
    })
})()