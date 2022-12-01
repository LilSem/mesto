'use strict'

initialCards.forEach(item => renderCard(createCard(item.name, item.link)));

function createCard(cardName, cardLink) {
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
    image.addEventListener('click', () => {
        imageFigure.src = image.src;
        imageFigure.alt = placeTitle.textContent;
        descriptionFigure.textContent = placeTitle.textContent;
        showPopup(previewPopup);
    });
    return card;
}

function renderCard(card) {
    cardContainer.prepend(card);
}

const showPopup = (popup) => {
    setPopupListeners(popup);
    // enableValidation(configValidation);
    popup.classList.add('popup_opened');
}

const closePopup = (popup) => {
    removePopupListeners(popup);
    popup.classList.remove('popup_opened');
}

const pressedEscape = (event, popup) => {
    if (event.key === 'Escape') {
        closePopup(popup);
    }
}

const pressedOverlay = (event, popup) => {
    if (event.target.classList.contains('popup')) {
        closePopup(popup);
    }
}

const setPopupListeners = (popup) => {
    popup.querySelector('.popup__btn-close').addEventListener('click', () => closePopup(popup));
    popup.addEventListener('mousedown', (event) => pressedOverlay(event, popup));
    document.addEventListener('keydown', (event) => pressedEscape(event, popup));
}

const removePopupListeners = (popup) => {
    popup.querySelector('.popup__btn-close').removeEventListener('click', () => closePopup(popup));
    popup.removeEventListener('mousedown', (event) => pressedOverlay(event, popup));
    document.removeEventListener('keydown', (event) => pressedEscape(event, popup));
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
    profileForm.reset();
});

cardForm.addEventListener('submit', (event) => {
    event.preventDefault();
    renderCard(createCard(titleInput.value, sourceInput.value))
    closePopup(cardPopup);
    cardForm.reset();
});