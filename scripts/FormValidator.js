export class FormValidator {
    constructor(configValidation, formElement) {
        this._inputSelector = configValidation.inputSelector;
        this._submitButtonSelector = configValidation.submitButtonSelector;
        this._inputErrorClass = configValidation.inputErrorClass;
        this._errorClass = configValidation.errorClass;
        this._formElement = formElement;

        this._inputList = Array.from(formElement.querySelectorAll(this._inputSelector));
        this._buttonElement = formElement.querySelector(this._submitButtonSelector);
    }


    _hasInvalidInput() {
        return this._inputList.some((inputElement) => {
            return !inputElement.validity.valid;
        })
    };

    _showInputError(inputElement, errorMessage) {
        const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.add(this._inputErrorClass);
        errorElement.textContent = errorMessage;
        errorElement.classList.add(this._errorClass);
    };

    _hideInputError(inputElement) {
        const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.remove(this._inputErrorClass);
        errorElement.classList.remove(this._errorClass);
        errorElement.textContent = '';
    };

    _isValid(inputElement) {
        if (!inputElement.validity.valid) {
            this._showInputError(inputElement, inputElement.validationMessage);
        } else {
            this._hideInputError(inputElement);
        }
    };

    _toggleButtonState() {
        if (this._hasInvalidInput()) {
            this._disabledButtonElement();
        } else {
            this._buttonElement.disabled = false;
        }
    };
    
    _disabledButtonElement(){
        this._buttonElement.disabled = true;
    }

    resetValidation() {
        this._toggleButtonState();
        this._inputList.forEach((inputElement) => {
            this._hideInputError(inputElement);
        });

    }

    _setEventListeners() {
        this._toggleButtonState();

        this._inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
                this._isValid(inputElement);

                this._toggleButtonState();
            });
        });
    };  

    enableValidation() {
        this._setEventListeners();
    };


}