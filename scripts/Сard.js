class Card {

    constructor(item, selector, handleOpenPopup) {
        this._name = item.name;
        this._link = item.link;
        this._selector = selector;
        this._element = this._getElement();
        this._handleOpenPopup = handleOpenPopup;

        this._likeBtn = this._element.querySelector('.cards__btn-like');
        this._removeBtn = this._element.querySelector('.cards__btn-remove');
        this._image = this._element.querySelector('.cards__image');
        this._placeTitle = this._element.querySelector('.cards__place');
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

        this._image.src = this._link;
        this._image.alt = this._name;
        this._placeTitle.textContent = this._name;

        return this._element;
    }

    _setEventListeners() {
        this._likeBtn.addEventListener('click', () => this._toggleLikeButtonState());
        this._removeBtn.addEventListener('click', () => this._removeCard());
        this._image.addEventListener('click', () => this._setImagePreview());
    }

    _toggleLikeButtonState() {
        this._likeBtn.classList.toggle('cards__btn-like_active')
    }

    _removeCard() {
        this._element.remove();
        this._element = null;
    }

    _setImagePreview() {
        this._handleOpenPopup(this._name, this._link);
    }
}

export default Card;