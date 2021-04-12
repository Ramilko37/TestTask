const modal = document.querySelector('.popup');
const addCartButton = document.querySelector('.add-to-cart__button_cart');

function openModal() {
    modal.classList.add('popup_opened');
    document.addEventListener('keydown', closeModalEscape);
    setTimeout(() => closeModal(), 3000);
}

function closeModal () {
    modal.classList.remove('popup_opened');
    document.removeEventListener('keydown', closeModalEscape);
};

function closeModalOverlay(e) {
    if (!e.target.closest('.popup__container')){
        closeModal(e.target.closest('.popup'));
    }
};

function closeModalEscape(evt) {
    if (evt.key === 'Escape') {
        closeModal(modal);
    }
};

addCartButton.addEventListener('click', openModal)
modal.addEventListener('click', closeModalOverlay)



