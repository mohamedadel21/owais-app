import Apis from "../../constants/Endpoints";
import client from "../../api/client";
import {
  LOGIN_OTP_VERIFICATION_REQUEST,
  LOGIN_OTP_VERIFICATION_SUCCESS,
  LOGIN_OTP_VERIFICATION_FAIL,
} from "../types/OtpVerificationTypes";

export const verify_otp = (otpCode) => async (dispatch) => {
  try {
    dispatch({
      type: LOGIN_OTP_VERIFICATION_REQUEST,
    });
    const { data } = await client.get(
      `${Apis.AUTH.VERIFY_OTP}?otpCode=${otpCode}`
    );
    dispatch({
      type: LOGIN_OTP_VERIFICATION_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: LOGIN_OTP_VERIFICATION_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
