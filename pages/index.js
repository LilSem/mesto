'use strict'

import './index.css';

import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";
import Card from "../components/Сard.js";
import Section from "../components/Section.js";
import FormValidator from "../components/FormValidator.js";
import {initialCards, configValidation, pageElements} from "../utils/data.js"

const {
    nameFieldSelector,
    aboutFieldSelector,
    editBtn,
    addBtn,
    nameInput,
    aboutInput,
    popupProfileSelector,
    popupCardSelector,
    profileForm,
    popupPreviewSelector,
    templateCardSelector,
    cardForm,
    cardContainer
} = pageElements;


const validationProfileForm = new FormValidator(configValidation, profileForm);
validationProfileForm.enableValidation();

const validationCardForm = new FormValidator(configValidation, cardForm);
validationCardForm.enableValidation();

const userInfo = new UserInfo(nameFieldSelector, aboutFieldSelector);

const popupProfile = new PopupWithForm(
    {
        selector: popupProfileSelector,
        handleSubmitForm: (formValues) => {
            userInfo.setUserInfo(formValues);

            popupCard.close();
        }
    });

const popupCard = new PopupWithForm(
    {
        selector: popupCardSelector,
        handleSubmitForm: (formValues) => {
            cardSection.addItem(createCard({name: formValues.title, link: formValues.url}));
            popupCard.close();
        }
    });

const popupCardPreview = new PopupWithImage(popupPreviewSelector);


const handleCardClick = (name, link) => {
    popupCardPreview.open(name, link);
    popupCardPreview.setEventListeners();
}

const createCard = (item) => {
    return new Card(item, templateCardSelector, handleCardClick).createCard();
}

const cardSection = new Section({
    items: initialCards,
    renderer: (item) => {
        cardSection.addItem(createCard(item));
    }
}, cardContainer);

cardSection.renderItems();

editBtn.addEventListener('click', () => {
    const userData = userInfo.getUserInfo();

    nameInput.value = userData.name;
    aboutInput.value = userData.about;

    validationProfileForm.resetValidation();

  /* Делаю кнопку не активной, для того чтобы при повторном открытии формы с профилем
     пользователь не мог отправить форму, пока не изменит в ней данные.
     Так мы избежим в будущем лишних операций с отправкой данных на сервер */
    validationProfileForm.disabledButtonSubmit();

    popupProfile.open();
    popupProfile.setEventListeners();
});

addBtn.addEventListener('click', () => {
    validationCardForm.resetValidation();

    popupCard.open();
    popupCard.setEventListeners();
});
