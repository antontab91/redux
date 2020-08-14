import { SET_LANGUAGE } from './language.actions';

const initialLanguage = 'en'

const languageReducer = (state = initialLanguage, action) => {
    switch (action.type) {
        case SET_LANGUAGE:
            return state = action.payload.lang;

        default:
            return state

    }
}

export default languageReducer;
