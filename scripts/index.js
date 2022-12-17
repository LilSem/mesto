'use strict'

import Card from "./Сard.js";
import {FormValidator} from "./FormValidator.js";
import {initialCards, configValidation, pageElements} from "./data.js"

const {
    nameField,
    aboutField,
    editBtn,
    addBtn,
    nameInput,
    aboutInput,
    titleInput,
    sourceInput,
    profilePopup,
    cardPopup,
    profileForm,
    previewPopup,
    cardForm,
    cardContainer
} = pageElements;

initialCards.forEach(item => {
    renderCard(new Card(item, '#card').createCard());
});

const validationProfileForm = new FormValidator(configValidation, profileForm);
validationProfileForm.enableValidation();

const validationCardForm = new FormValidator(configValidation, cardForm);
validationCardForm.enableValidation();

function renderCard(card) {
    cardContainer.prepend(card);
}

const showPopup = (popup) => {
    setPopupListeners(popup);
    popup.classList.add('popup_opened');
}

const closePopup = () => {
    const activePopup = document.querySelector('.popup_opened');
    removePopupListeners(activePopup);
    activePopup.classList.remove('popup_opened');
}

const pressedEscape = (event) => {
    if (event.key === 'Escape') {
        closePopup();
    }
}

const pressedOverlay = (event) => {
    if (event.target.classList.contains('popup')) {
        closePopup();
    }
}

const setPopupListeners = (popup) => {
    popup.querySelector('.popup__btn-close').addEventListener('click', closePopup);
    popup.addEventListener('mousedown', pressedOverlay);
    document.addEventListener('keydown', pressedEscape);
}

const removePopupListeners = (popup) => {
    popup.querySelector('.popup__btn-close').removeEventListener('click', closePopup);
    popup.removeEventListener('mousedown', pressedOverlay);
    document.removeEventListener('keydown', pressedEscape);
}

editBtn.addEventListener('click', () => {
    nameInput.value = nameField.textContent;
    aboutInput.value = aboutField.textContent;
    showPopup(profilePopup);
});

addBtn.addEventListener('click', () => showPopup(cardPopup));

profileForm.addEventListener('submit', (event) => {
    event.preventDefault();
    nameField.textContent = nameInput.value;
    aboutField.textContent = aboutInput.value;
    closePopup(profilePopup);
    validationProfileForm.disabledButtonElement();
    profileForm.reset();
});

cardForm.addEventListener('submit', (event) => {
    event.preventDefault();
    renderCard(new Card({name: titleInput.value, link: sourceInput.value}, '#card').createCard());
    closePopup(cardPopup);
    validationCardForm.disabledButtonElement();
    cardForm.reset();
});


export {showPopup, previewPopup};