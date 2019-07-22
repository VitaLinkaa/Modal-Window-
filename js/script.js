document.querySelectorAll('.modalShow').forEach(function(elem) {
    elem.onclick = showModalWindow;
});

document.querySelectorAll('.modalClose').forEach(function(elem) {
    elem.onclick = closeModalWindow;
});

document.querySelectorAll('.modalWrap').forEach(function(elem) {
    elem.onclick = closeModalWrap;
});


    
function showModalWindow() {
    let modalId = this.dataset.modal;

    document.querySelector(modalId).parentElement.classList.remove('hide');
    document.querySelector(modalId).classList.remove('hide');

    document.onkeydown = function(event) {
        console.log(event);
        if (event.keyCode = 27) {
            document.querySelectorAll('.modalWrap').forEach(function(elem) {
                elem.classList.add('hide');
                elem.children[0].classList.add('hide');
                document.onkeydown = null;
            });
        }
    }
}

function closeModalWindow() {
    let modalId = this.dataset.modal;

    document.querySelector(modalId).parentElement.classList.add('hide');
    document.querySelector(modalId).classList.add('hide');
    document.onkeydown = null;
}

function closeModalWrap() {
    this.classList.add('hide');
    this.children[0].classList.add('hide');
    document.onkeydown = null;
}