import { createStore } from 'redux';

const TOGGLE_OPTIONS
  = 'OPTIONS/TOGGLE_OPTIONS
';

const toggleOption = (id) => {
  return {
    type: TOGGLE_OPTIONS,
    payload: {
      id
    }
  }
}


const options = [
  {
    id: 'id-0',
    name: '19-inch wheels',
  },
  {
    id: 'id-1',
    name: 'Leather-trimmed Sport Seats',
  },
  {
    id: 'id-2',
    name: 'B&O Sound System',
  },
  {
    id: 'id-3',
    name: 'Adaptive Cruise Control',
  },
  {
    id: 'id-4',
    name: 'Daytime running lights',
  },
  {
    id: 'id-5',
    name: 'Auto High-Beam Headlamps',
  },
  {
    id: 'id-6',
    name: 'Carbon Sport Interior',
  },
];


const initialState = {

  optionsList: options,
  selected: [],

}

const optionsReducer = (action = initialState, state) => {
  switch (action.type) {
    case TOGGLE_OPTIONS: {

      const newSelected = state.selected.includes(action.payload.id)
        ? state.selected.filter((optionId) => { return optionId !== action.payload.id })   // если она там уже есть -возвращаем новый массив без нее 
        : state.selected.concat(action.payload.id)                                         // если нет - добавляем 

      return {
        ...state,
        selected: newSelected,
      }
    }
    default:
      return state;
  }
}

export default optionsReducer;