import { POST_RALLYREPORT } from "../modules/RallyReportModule";

export const callPostRallyReportAPI = ({ form }) => {

    const URL = 'http://localhost:8000/api/v1/reports';

    const token = window.localStorage.getItem('jwtToken');

    return async (dispatch, getState) => {

        const result = await fetch(URL, {
            method: "POST",
            headers: {
                "Accept": "*/*",
                "Auth": token
            },
            body: form
        })

        dispatch({ type: POST_RALLYREPORT, payload: result });
    };
}