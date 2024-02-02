import * as AuthApi from '../api/AuthRequests';

export const loginadmin = (userDetails, navigate) => async (dispatch) => {

    dispatch({ type: "AUTH_START" })
    try {
        const { data } = await AuthApi.loginadmin(userDetails);
        dispatch({ type: "AUTH_SUCCESS", data: data });
        navigate("../dashboarduser", { replace: true });
    } catch (error) {
        console.log(error)
        dispatch({ type: "AUTH_FAIL" })
    }
}