import { TOGGLE_OPTIONS } from './options.actions';

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
  selected: ['id-6'],
}


const optionsReducer = (state = initialState, action) => {
  switch (action.type) {

    case TOGGLE_OPTIONS: {

      const newSelected = state.selected.includes(action.payload.optionId)
        ? state.selected.filter(id => id !== action.payload.optionId)
        : state.selected.concat(action.payload.optionId)

      console.log(state.selected)

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