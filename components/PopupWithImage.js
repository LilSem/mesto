import Popup from "./Popup.js";


export default class PopupWithImage extends Popup {

    constructor(popupSelector) {
        super(popupSelector);
        this._figureImage = document.querySelector('.figure__preview');
        this._figureCaptionSelector = document.querySelector('.figure__description');
    }

    open(name, link) {
        super.open();
        this._figureImage.src = link;
        this._figureImage.alt = name;
        this._figureCaptionSelector.textContent = name;
    }
}