"use strict"

let name = document.querySelector('.profile__name');
let about = document.querySelector('.profile__about');
let editBtn = document.querySelector('.profile__btn-edit');
let closeBtn = document.querySelector('.popup__btn-close');
let nameInput = document.querySelector('.popup__input_type_name');
let aboutInput = document.querySelector('.popup__input_type_about');
let popup = document.querySelector('.popup');
const popupForm = document.querySelector('.popup__form');

function showPopup() {
    nameInput.value = name.textContent;
    aboutInput.value = about.textContent;
    popup.classList.add('popup_opened');

}

function clearInput() {
    nameInput.value = '';
    aboutInput.value = '';
}

function savePopup(evt) {
    evt.preventDefault();
    name.textContent = nameInput.value;
    about.textContent = aboutInput.value;
    clearInput();
    closePopup();
}

function closePopup() {
    popup.classList.remove('popup_opened');
}


editBtn.addEventListener('click', showPopup);
popupForm.addEventListener('submit', savePopup);
closeBtn.addEventListener('click', closePopup);

