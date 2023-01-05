export default class Popup {
    constructor(popupSelector) {
        this._popup = document.querySelector(popupSelector);
        this._openedSelector = 'popup_opened';
        this._btnClose = this._popup.querySelector('.popup__btn-close');

        this.close = this.close.bind(this);
        this._handleOverlayClose = this._handleOverlayClose.bind(this);
        this._handleEscClose = this._handleEscClose.bind(this);
    }

    open() {
        document.addEventListener('keydown', this._handleEscClose);
        this._popup.classList.add(this._openedSelector);
    }

    close() {
        this._popup.classList.remove(this._openedSelector);
        document.removeEventListener('keydown', this._handleEscClose);
    }

    setEventListeners() {
        this._btnClose.addEventListener('click', this.close);
        this._popup.addEventListener('mousedown', this._handleOverlayClose);
    }

    _handleOverlayClose(event) {
        if (event.target.classList.contains('popup')) {
            this.close();
        }
    }

    _handleEscClose(event) {
        if (event.key === 'Escape') {
            this.close();
        }
    }
}