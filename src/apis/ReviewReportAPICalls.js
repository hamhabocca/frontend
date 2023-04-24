import { POST_REVIEWREPORT } from "../modules/ReviewReportModule";

export const callPostReviewReportAPI = ({ form }) => {

    console.log("form", form)

    const URL = 'http://localhost:8000/api/v1/report';

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

        console.log("[ReviewsReportAPICalls] callPostReviewReportAPI RESULT:", result);

        dispatch({ type: POST_REVIEWREPORT, payload: result });
    };
}