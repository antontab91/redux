export const optionsSelectors = (state) => {
  return state.options.optionsList;
}

export const availableOptionsSelectors = (state) => {
  const availableOptions = state.options.optionsList;
  const selectedOptions = state.options.selected;

  return availableOptions.filter((option) => {               // фильтруем весь список (тот что в стейте) , на каждой итерации проверяем есть ли совпадения по айдишнику в массиве selected , возвращаем массив только стеми опциями чьих айдишников не было в массиве инклюдс
    return !selectedOptions.includes(option.id)
  })
}

export const selectedOptionsSelectors = (state) => {
  const availableOptions = state.options.optionsList;
  const selectedOptions = state.options.selected;

  return availableOptions.filter((option) => {       // фильтруем весь список (тот что в стейте) , на каждой итерации проверяем есть ли совпадения по айдишнику в массиве selected , возвращаем массив только стеми опциями чьи айдишники есть в массиве selected
    return selectedOptions.includes(option.id)
  })
}