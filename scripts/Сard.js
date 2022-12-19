class Card {

    constructor(item, selector, handleOpenPopup) {
        this._name = item.name;
        this._link = item.link;
        this._selector = selector;
        this._element = this._getElement();
        this._handleOpenPopup = handleOpenPopup;

        this.likeBtn = this._element.querySelector('.cards__btn-like');
        this.removeBtn = this._element.querySelector('.cards__btn-remove');
        this.imageCard = this._element.querySelector('.cards__image');
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
        this.likeBtn.addEventListener('click', () => this._toggleLikeButtonState());
        this.removeBtn.addEventListener('click', () => this._removeCard());
        this.imageCard.addEventListener('click', () => this._setImagePreview());
    }

    _toggleLikeButtonState() {
        this.likeBtn.classList.toggle('cards__btn-like_active')
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