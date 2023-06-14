import {
    LOGIN_OTP_VERIFICATION_REQUEST,
    LOGIN_OTP_VERIFICATION_SUCCESS,
    LOGIN_OTP_VERIFICATION_FAIL,
    
} from '../types/OtpVerificationTypes';

export const loginOTPVerificationReducer = (state = {}, action) => {
    switch (action.type) {
        case LOGIN_OTP_VERIFICATION_REQUEST:
            return { loading: true };
        case LOGIN_OTP_VERIFICATION_SUCCESS:
            return {
                loading: false,
                verifyOtpCodeData:action.payload
            };
        case LOGIN_OTP_VERIFICATION_FAIL:
            return { loading: false, error: action.payload };
       
        default:
            return state;
    }
};