import { GET_PARTICIPATE, POST_PARTICIPATE, PUT_PARTICIPATE, CANCEL_PARTICIPATE } from '../modules/ParticipateModule';

// 랠리 신청 현황
export const callParticipateListAPI = ({ rallyId }) => {

    console.log("[ParticipateAPICalls] ParticipateListAPI Call...");

    const URL = `http://localhost:8000/api/v1/rallies/${rallyId}/mate-list`;

    return async (dispatch, getState) => {

        const result = await fetch(URL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*",
                "Auth": window.localStorage.getItem("jwtToken")
            }
        })
            .then(response => response.json());

        console.log('[ParticipateAPICalls] ParticipateListAPI RESULT: ', result);

        if (result.httpStatus === 200) {
            console.log('[ParticipateAPICalls] ParticipateListAPI SUCCESS');
            dispatch({ type: GET_PARTICIPATE, payload: result.results.rallyMateList });
        }
    };
}

// 랠리 참가 신청
export const callParticipateRallyByMateAPI = ({ rallyId }) => {

    console.log("[ParticipateAPICalls] participateRallyByMateAPI Call...");

    const URL = `http://localhost:8000/api/v1/rallies/${rallyId}/mate-list`;

    return async (dispatch, getState) => {

        const result = await fetch(URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*",
                "Auth": window.localStorage.getItem("jwtToken")
            }
        })
            .then(response => response.json());

        console.log('[ParticipateAPICalls] participateRallyByMateAPI RESULT: ', result);

        dispatch({ type: POST_PARTICIPATE, payload: result.results.rallyMateList });

    }
}

// 랠리 참가 취소
export const callCancelParticipateRallyAPI = ({ rallyId }) => {

    console.log("[ParticipateAPICalls] cancelParticipateRallyAPI Call...");

    const URL = `http://localhost:8000/api/v1/rallies/${rallyId}/mate-list`;

    return async (dispatch, getState) => {

        const result = await fetch(URL, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*",
                "Auth": window.localStorage.getItem("jwtToken")
            }
        })
            .then(response => response.json());

        console.log('[ParticipateAPICalls] cancelParticipateRallyAPI RESULT: ', result);

        dispatch({ type: CANCEL_PARTICIPATE, payload: result });
    }
}

// 랠리 참가신청 승인
export const callAllowParticipateByMasterAPI = ({ rallyId, mateId }) => {

    console.log("[ParticipateAPICalls] AllowParticipateByMasterAPI Call...");

    const URL = `http://localhost:8000/api/v1/rallies/${rallyId}/mate-list?mateId=${mateId}`;

    return async (dispatch, getState) => {

        const result = await fetch(URL, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*",
                "Auth": window.localStorage.getItem("jwtToken")
            }
        })
            .then(response => response.json());

        console.log('[ParticipateAPICalls] AllowParticipateByMasterAPI RESULT: ', result);

        dispatch({ type: PUT_PARTICIPATE, payload: result });

    }
}