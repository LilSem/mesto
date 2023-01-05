import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {

    constructor({selector, handleSubmitForm}) {
        super(selector);
        this._handleSubmitForm = handleSubmitForm;

        this._form = this._popup.querySelector('.form');
        this._inputList = this._form.querySelectorAll('.form__input');
    }

    _getInputValues() {
        this._formValues = {};

        this._inputList.forEach((input) => {
            this._formValues[input.name] = input.value;
        });

        return this._formValues;
    }

    setEventListeners() {
        super.setEventListeners();

        this._form.addEventListener('submit',this.handleEventListener);
    }

    handleEventListener = (event) => {
        event.preventDefault();
        this._handleSubmitForm(this._getInputValues());
    }

    close() {
        super.close();
        this._form.reset();
    }
}