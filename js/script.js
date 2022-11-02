"use strict"

let name = document.querySelector('.profile__name');
let about = document.querySelector('.profile__about');
let editBtn = document.querySelector('.profile__btn-edit');
let closeBtn = document.querySelector('.popup__btn-close');
let nameInput = document.querySelector('.popup__input_name');
let aboutInput = document.querySelector('.popup__input_about');
let popup = document.querySelector('.popup');
const popupForm = document.querySelector('.popup__container');

function showPopup() {
    nameInput.value = name.textContent;
    aboutInput.value = about.textContent;
    if (popup.classList.contains('popup__closed')) {
        popup.classList.remove('popup__closed');
        popup.classList.add('popup__opened');
    } else {
        popup.classList.add('popup__opened');
    }
}

function clearInput(){
    nameInput.value = '';
    aboutInput.value = '';
}

function savePopup(evt) {
    evt.preventDefault();
    name.textContent = nameInput.value;
    about.textContent = aboutInput.value;
    clearInput();
    popup.classList.add('popup__closed');
}

function closePopup() {
    popup.classList.add('popup__closed');
}


editBtn.addEventListener('click', showPopup);
popupForm.addEventListener('submit', savePopup);
closeBtn.addEventListener('click',closePopup);

