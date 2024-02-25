import axios from "axios";
import Cookies from 'js-cookie';
import {
    LOGIN_FAIL,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGOUT_FAIL,
    LOGOUT_SUCCESS,
    REGISTER_USER_FAIL,
    REGISTER_USER_REQUEST,
    REGISTER_USER_SUCCESS,
    CLEAR_ERRORS
} from '../constants/userConstants';

//Login User Functionality
export const login = (email, password) => async (dispatch) => {
    try {
        dispatch({ type: LOGIN_REQUEST });
        console.log("Data req before ", email, password);
        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };
        const { data } = await axios.post(
            'http://localhost:5001/client/login',
            { email, password },
            config
        );
        console.log("Data in Response ", data);
        // Cookie.set("tokrn", data?.token, { expiresIn: 7, secure: false });
        dispatch({
            type: LOGIN_SUCCESS,
            payload: data?.user,
        })
    } catch (error) {
        console.log("User Action", error);
        dispatch({
            type: LOGIN_FAIL,
            payload: error.response?.data?.message,
        });
    }
}
//Register User Functionality
export const register = (userData) => async (dispatch) => {
    try {
        dispatch({ type: REGISTER_USER_REQUEST });
        let link = 'http://localhost:5001/client/registerUser';
        const config = { headers: { "Content-Type": "multipart/form-data" } };

        console.log('User Data ', userData);
        const { data } = await axios.post(link, userData, config);

        dispatch({ type: REGISTER_USER_SUCCESS, payload: data.user });
    } catch (error) {
        dispatch({
            type: REGISTER_USER_FAIL,
            payload: error.response.data.message,
        });
    }
};


//Clearing Errors
export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
};