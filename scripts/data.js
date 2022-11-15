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

// Popup preview
const imagePreview = document.querySelector('.figure__preview');
const descriptionPreview = document.querySelector('.figure__description');

// Popup names
const popupProfile = document.querySelector('.popup_profile');
const popupAddCard = document.querySelector('.popup_card');
const popupPreview = document.querySelector('.popup_preview');

// Form
const profilePopupForm = document.querySelector('.form_profile');
const addCardPopupForm = document.querySelector('.form_card');