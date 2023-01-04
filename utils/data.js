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

const configValidation = {
    inputSelector: '.form__input',
    submitButtonSelector: '.form__submit-btn',
    inputErrorClass: 'form__input_type_error',
    errorClass: 'form__input-error_active'
};

const pageElements = {
    nameFieldSelector: '.profile__name',
    aboutFieldSelector: '.profile__about',
    editBtn: document.querySelector('.profile__btn-edit'),
    addBtn: document.querySelector('.profile__btn-add'),
    nameInput: document.querySelector('.form__input_type_name'),
    aboutInput: document.querySelector('.form__input_type_about'),
    popupProfileSelector: '.popup_profile',
    popupCardSelector:'.popup_card',
    popupPreviewSelector: '.popup_preview',
    templateCardSelector: '#card',
    profileForm: document.querySelector('.form_profile'),
    cardForm: document.querySelector('.form_card'),
    cardContainer:'.cards'
};

export {initialCards, configValidation, pageElements}