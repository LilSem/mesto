import {showPopup, previewPopup} from "./index.js";

class Card {

    constructor(item, selector) {
        this._name = item.name;
        this._link = item.link;
        this._selector = selector;
        this._element = this._getElement();
    }

    _getElement() {
        return document
            .querySelector(this._selector)
            .content
            .querySelector('.cards__item')
            .cloneNode(true);
    }

    createCard() {
        this._setEventListeners();

        this._image = this._element.querySelector('.cards__image');
        this._placeTitle = this._element.querySelector('.cards__place');

        this._image.src = this._link;
        this._image.alt = this._name;
        this._placeTitle.textContent = this._name;

        return this._element;
    }

    _setEventListeners() {
        this._element.querySelector('.cards__btn-like')
            .addEventListener('click', event => event.target.classList.toggle('cards__btn-like_active'));
        this._element.querySelector('.cards__btn-remove')
            .addEventListener('click', event => event.target.closest('.cards__item').remove());
        this._element.querySelector('.cards__image')
            .addEventListener('click', () => {
                this._setImagePreview();
            });
    }

    _setImagePreview() {
        this._imageFigure = document.querySelector('.figure__preview');
        this._descriptionFigure = document.querySelector('.figure__description');

        this._imageFigure.src = this._image.src;
        this._imageFigure.alt = this._placeTitle.textContent;
        this._descriptionFigure.textContent = this._placeTitle.textContent;
        showPopup(previewPopup);
    }
}

export default Card;