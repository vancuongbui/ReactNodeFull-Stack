// import axios for fetching data
import axios from 'axios';
// import action types
import { FETCH_USER } from './actionTypes';


export const fetchUserAction = () => {
    return async (dispatch) => {
        // make sure proxy for '/api/current_user' was configued on json file
        const res = await axios.get('/api/current_user')
        dispatch({
                type: FETCH_USER,
                payload: res.data,      //data is thr user's data
        });
    };
};

export const handlePaymentAction = (token) => {
    return async (dispatch) => {
        const res = await axios.post('/api/payment', token);
    }
}