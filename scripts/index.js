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
    closeBtnList,
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

const showPopup = (popup) => {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', closeByEsc);
}

const handleShowPopup = (name, link) => {
    imagePopup.src = link;
    imagePopup.alt = name;
    imageCaptionPopup.textContent = name;
    showPopup(previewPopup);
}

const closePopup = (popup) => {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', closeByEsc);
}

const closeByEsc = (event) => {
    if (event.key === 'Escape') {
        const activePopup = document.querySelector('.popup_opened');
        closePopup(activePopup);
    }
}

const closeByOverlay = (event) => {
    const activePopup = event.target;
    if (activePopup.classList.contains('popup')) {
        closePopup(activePopup);
    }
}

initialCards.forEach((item) => {
    renderCard(generationCard(item, '#card'));
});

editBtn.addEventListener('click', () => {
    nameInput.value = nameField.textContent;
    aboutInput.value = aboutField.textContent;
    validationProfileForm.resetValidation();
    showPopup(profilePopup);
});

addBtn.addEventListener('click', () => {
    validationCardForm.resetValidation();
    showPopup(cardPopup);
});

profileForm.addEventListener('submit', (event) => {
    event.preventDefault();
    nameField.textContent = nameInput.value;
    aboutField.textContent = aboutInput.value;
    closePopup(profilePopup);
    profileForm.reset();
});

cardForm.addEventListener('submit', (event) => {
    event.preventDefault();
    renderCard(generationCard({name: titleInput.value, link: sourceInput.value}, '#card'));
    closePopup(cardPopup);
    cardForm.reset();
});

closeBtnList.forEach((button) => {
    const popup = button.closest('.popup');
    button.addEventListener('click', () => closePopup(popup));
});

popupList.forEach((popup) => {
    popup.addEventListener('mousedown', closeByOverlay);
});