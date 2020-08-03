import { SET, REMOVE } from './user.actions';


export const usersReducer = (state = null, action) => {
    switch (action.type) {
        case SET: {
            return action.payload.userData;
        }

        case REMOVE: {
            return null;
        }

        default:
            return state;
    }
};
