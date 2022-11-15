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

// Profile fields
const nameField = document.querySelector('.profile__name');
const aboutField = document.querySelector('.profile__about');

// Profile button
const editBtn = document.querySelector('.profile__btn-edit');
const addBtn = document.querySelector('.profile__btn-add');

// Popup button
const closeBtn = document.querySelectorAll('.popup__btn-close');

// Form inputs
const nameInput = document.querySelector('.form__input_type_name');
const aboutInput = document.querySelector('.form__input_type_about');
const titleInput = document.querySelector('.form__input_type_title');
const sourceInput = document.querySelector('.form__input_type_image-url');

// Figure
const imageFigure = document.querySelector('.figure__preview');
const descriptionFigure = document.querySelector('.figure__description');

// Popup names
const profilePopup = document.querySelector('.popup_profile');
const cardPopup = document.querySelector('.popup_card');
const previewPopup = document.querySelector('.popup_preview');

// Form
const profileForm = document.querySelector('.form_profile');
const cardForm = document.querySelector('.form_card');