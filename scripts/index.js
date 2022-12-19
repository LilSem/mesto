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
    cardContainer,
    closeBtn,
    popupList,
    imagePopup,
    imageCaptionPopup
} = pageElements;


const validationProfileForm = new FormValidator(configValidation, profileForm);
validationProfileForm.enableValidation();

const validationCardForm = new FormValidator(configValidation, cardForm);
validationCardForm.enableValidation();

function renderCard(card) {
    cardContainer.prepend(card);
}

const generationCard = (item, selector) => {
    return new Card(item, selector, handleShowPopup).createCard();
}

const resetFormValidation = (popup) => {
    if (popup.contains(profilePopup)) {
        validationProfileForm.resetValidation();
    } else if ((popup.contains(cardPopup))) {
        validationCardForm.resetValidation();
    }
}

const showPopup = (popup) => {
    popup.classList.add('popup_opened');
    resetFormValidation(popup);
}

const handleShowPopup= (name, link) => {
    imagePopup.src = link;
    imagePopup.alt = name;
    imageCaptionPopup.textContent = name;
    showPopup(previewPopup);
}


const closePopup = (popup) => {
    popup.classList.remove('popup_opened');
}

const pressedEscape = (event) => {
    const activePopup = document.querySelector('.popup_opened');
    if (event.key === 'Escape' && activePopup) {
        closePopup(activePopup);
    }
}

const pressedOverlay = (event) => {
    const activePopup = event.target;
    if (activePopup.classList.contains('popup')) {
        closePopup(activePopup.closest('.popup'));
    }
}

initialCards.forEach((item) => {
    renderCard(generationCard(item, '#card'));
});

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
    validationProfileForm._disabledButtonElement();
    profileForm.reset();
});

cardForm.addEventListener('submit', (event) => {
    event.preventDefault();
    renderCard(generationCard({name: titleInput.value, link: sourceInput.value}, '#card'));
    closePopup(cardPopup);
    validationCardForm._disabledButtonElement();
    cardForm.reset();
});

closeBtn.forEach((button) => {
    button.addEventListener('click', (event) => {
        closePopup(event.target.closest('.popup'))
    });
});

popupList.forEach((popup) => {
    popup.addEventListener('mousedown', pressedOverlay);
});

document.addEventListener('keydown', pressedEscape);