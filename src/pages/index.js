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

const popupProfile = new PopupWithForm(
    {
        selector: popupProfileSelector,
        handleSubmitForm: (formValues) => {
            userInfo.setUserInfo(formValues);

            popupProfile.close();
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

const userInfo = new UserInfo(nameFieldSelector, aboutFieldSelector);

const validationProfileForm = new FormValidator(configValidation, profileForm);
const validationCardForm = new FormValidator(configValidation, cardForm);

popupProfile.setEventListeners();
popupCard.setEventListeners();
popupCardPreview.setEventListeners();

validationProfileForm.enableValidation();
validationCardForm.enableValidation();

const handleCardClick = (name, link) => {
    popupCardPreview.open(name, link);
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
    validationProfileForm.disabledButtonSubmit();

    popupProfile.open();
});

addBtn.addEventListener('click', () => {
    validationCardForm.resetValidation();

    popupCard.open();
});
