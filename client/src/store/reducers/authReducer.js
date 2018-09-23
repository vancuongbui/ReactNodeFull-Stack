import { FETCH_USER } from '../actions/actionTypes';

const INIT_STATE = {
    currentUser: null,
};

export default (state=INIT_STATE, action) => {
    console.log(action);
    switch (action.type) {
        case FETCH_USER:
            return {
                ...state,
                currentUser: action.payload || false,
            }
        default:
            return state;
    }
}
