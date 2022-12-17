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
    nameField: document.querySelector('.profile__name'),
    aboutField: document.querySelector('.profile__about'),
    editBtn: document.querySelector('.profile__btn-edit'),
    addBtn: document.querySelector('.profile__btn-add'),
    nameInput: document.querySelector('.form__input_type_name'),
    aboutInput: document.querySelector('.form__input_type_about'),
    titleInput: document.querySelector('.form__input_type_title'),
    sourceInput: document.querySelector('.form__input_type_image-url'),
    profilePopup: document.querySelector('.popup_profile'),
    cardPopup: document.querySelector('.popup_card'),
    previewPopup: document.querySelector('.popup_preview'),
    profileForm: document.querySelector('.form_profile'),
    cardForm: document.querySelector('.form_card'),
    cardContainer: document.querySelector('.cards')
};

export {initialCards, configValidation, pageElements}