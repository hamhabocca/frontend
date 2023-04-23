import { POST_RALLYREPORT } from "../modules/RallyReportModule";

export const callPostRallyReportAPI = ({ form }) => {

    console.log("form", form)

    console.log("[RallyReportAPICalls] callPostRallyReportAPI Call");

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
            // .then(response => response.json());

        console.log("[RallyReportAPICalls] callPostRallyReportAPI RESULT:", result);

        dispatch({ type: POST_RALLYREPORT, payload: result });
    };
}