function highlightCurrentPage() {
    let loc = document.location.toString().split('/').at(-1);
    let linkElements = document.querySelectorAll(`a[href="${loc}"]`);
    //linkElements.forEach(element => element.parentElement.classList.add('active_element'));
    linkElements.forEach(element => {
        element.parentElement.classList.add('active_element');
            element.parentElement.innerHTML = "<b>" + element.innerHTML + "</b>";

        }
    );
}

window.addEventListener('load', highlightCurrentPage);