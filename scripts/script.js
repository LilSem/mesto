'use strict'

const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

//Profile fields
const nameField = document.querySelector('.profile__name');
const aboutField = document.querySelector('.profile__about');

//Profile button
const editBtn = document.querySelector('.profile__btn-edit');
const addBtn = document.querySelector('.profile__btn-add');

//Popup button
const closeBtn = document.querySelectorAll('.popup__btn-close');

//Popup inputs
const nameInput = document.querySelector('.popup__input_type_name');
const aboutInput = document.querySelector('.popup__input_type_about');
const titleInput = document.querySelector('.popup__input_type_title');
const imageUrlInput = document.querySelector('.popup__input_type_image-url');

//Popup names
const popupProfile = document.querySelector('.popup__profile');
const popupAddCard = document.querySelector('.popup__add-card');
const popupPreview = document.querySelector('.popup__preview');

//Popup Form
const popupForm = document.querySelector('.popup__form');

function showPopup(buttonName, popupName) {
    switch (buttonName.className) {
        case editBtn.className:
            fillProfile();
            popupName.classList.add('popup_opened');
            break;
        case addBtn.className:
            popupName.classList.add('popup_opened');
            break;
    }
}

function fillProfile() {
    nameInput.value = nameField.textContent;
    aboutInput.value = aboutField.textContent;
}

function clearInput() {
    nameInput.value = '';
    aboutInput.value = '';
}

function savePopup(event) {
    event.preventDefault();
    nameField.textContent = nameInput.value;
    aboutField.textContent = aboutInput.value;
    clearInput();
    closePopup(event.target);
}

function closePopup(element) {
    element.closest('.popup').classList.remove('popup_opened');
}


editBtn.addEventListener('click', (event) => showPopup(event.target, popupProfile));
addBtn.addEventListener('click', (event) => showPopup(event.target, popupAddCard));
popupForm.addEventListener('submit', savePopup);
closeBtn.forEach((el) => {
    el.addEventListener('click', (event) => closePopup(event.target))
})

