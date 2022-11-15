'use strict'

window.addEventListener('DOMContentLoaded', () => initialCards.forEach(item => renderCard(item.name, item.link)));

function renderCard(cardName, cardLink) {
    const cardContainer = document.querySelector('.cards');
    const cardTemplate = document.querySelector('#card').content;
    const card = cardTemplate.querySelector('.cards__item').cloneNode(true);
    const image = card.querySelector('.cards__image');
    const placeTitle = card.querySelector('.cards__place');
    const likeBtn = card.querySelector('.cards__btn-like');
    const removeBtn = card.querySelector('.cards__btn-remove');

    image.src = cardLink;
    image.alt = cardName;
    placeTitle.textContent = cardName;

    likeBtn.addEventListener('click', event => event.target.classList.toggle('cards__btn-like_active'));
    removeBtn.addEventListener('click', event => event.target.closest('.cards__item').remove());
    image.addEventListener('click', (event) => {
        imageFigure.src = image.src;
        descriptionFigure.textContent = placeTitle.textContent;
        showPopup(event.target, previewPopup);
    });

    cardContainer.prepend(card);
}

function showPopup(buttonName, popupName) {
    switch (buttonName.className) {
        case editBtn.className:
            fillProfile();
            popupName.classList.add('popup_opened');
            break;
        default:
            popupName.classList.add('popup_opened');
            break;
    }
}

function fillProfile() {
    nameInput.value = nameField.textContent;
    aboutInput.value = aboutField.textContent;
}

function closePopup(element) {
    element.closest('.popup').classList.remove('popup_opened');
}


editBtn.addEventListener('click', (event) => showPopup(event.target, profilePopup));
addBtn.addEventListener('click', (event) => showPopup(event.target, cardPopup));

profileForm.addEventListener('submit', (event) => {
    event.preventDefault();
    nameField.textContent = nameInput.value;
    aboutField.textContent = aboutInput.value;
    closePopup(profileForm);
    profileForm.reset();
});

cardForm.addEventListener('submit',(event) => {
    event.preventDefault();
    renderCard(titleInput.value, sourceInput.value);
    closePopup(cardPopup);
    cardForm.reset();
});

closeBtn.forEach((button) => {
    button.addEventListener('click', (event) => closePopup(event.target))
});

