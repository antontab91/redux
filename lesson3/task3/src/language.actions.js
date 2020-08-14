export const SET_LANGUAGE = 'CART/LANGUAGE'


export const setLanguage = (lang) => {
    return {
        type: SET_LANGUAGE,
        payload: {
            lang,
        }
    }
}
