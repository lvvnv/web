function highlightCurrentPage() {
    let loc = document.location.toString().split('/').at(-1).split('?').at(0)
    let linkElements = document.querySelectorAll(`a[href="${loc}"]`);
    linkElements.forEach(element => {
        element.parentElement.classList.add('menu__item_active');
        element.parentElement.innerHTML = "<b>" + element.innerHTML + "</b>";
    });
}

window.addEventListener('load', highlightCurrentPage);