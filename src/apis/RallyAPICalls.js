import { GET_RALLYLIST, GET_RALLY, POST_RALLY, PUT_RALLY, GET_MASTER } from "../modules/RallyModule";

// 전체 목록 조회 (페이징)
export const callRallyListAPI = ({ currentPage }) => {

    // console.log("[RallyAPICalls] callRallyListAPI Call");

    let URL = "";

    if (currentPage !== undefined || currentPage !== null) {
        URL = `http://localhost:8000/api/v1/rallies?page=${currentPage}`;
    } else {
        URL = 'http://localhost:8000/api/v1/rallies?page=1';
    }

    console.log('[RallyAPICalls] URL : ', URL);

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

        if (result.httpStatus === 200) {
            console.log('[RallyAPICalls] callRallyListAPI RESULT : ', result);
            dispatch({ type: GET_RALLYLIST, payload: result.results });
        }
    };
}

// 선택 조회
export const callRallyDetailAPI = ({ rallyId }) => {

    // console.log("[RallyAPICalls] callRallyDetailAPI Call");

    const URL = `http://localhost:8000/api/v1/rallies/${rallyId}`;

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

        console.log('[RallyAPICalls] callRallyDetailAPI RESULT : ', result);

        if (result.httpStatus === 200) {

            const URL = `http://localhost:8000/api/v1/members/simple/${result.results.rally.masterId}`;
            const master = await fetch(URL, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "*/*",
                    "Auth": window.localStorage.getItem("jwtToken")
                }
            })
                .then(res => res.json());

            console.log('[RallyAPICalls] callRallyMasterAPI RESULT : ', master);

            const rallyInfo = { ...result.results?.rally, master: master.results?.member };
            dispatch({ type: GET_RALLY, payload: rallyInfo });
        }
    };
}

// 랠리 등록
export const callPostRallyAPI = ({ form }) => {

    // console.log("[RallyAPICalls] callPostRallyAPI Call");

    const URL = 'http://localhost:8000/api/v1/rallies';

    return async (dispatch, getState) => {

        const result = await fetch(URL, {
            method: "POST",
            headers: {
                "Accept": "*/*",
                "Auth": window.localStorage.getItem("jwtToken")
            },
            body: form
        })
            .then(response => response.json());

        console.log("[RallyAPICalls] callPostRallyAPI RESULT:", result);

        dispatch({ type: POST_RALLY, payload: result });
    };
}

// 랠리 수정
export const callModifyRallyAPI = ({ form, rallyId }) => {

    // console.log('[RallyAPICalls] callModifyRallyAPI Call');

    const URL = `http://localhost:8000/api/v1/rallies/${rallyId}`;

    console.log("URL", URL);

    return async (dispatch, getState) => {

        const result = await fetch(URL, {
            method: "PUT",
            headers: {
                "Accept": "*/*",
                "Auth": window.localStorage.getItem("jwtToken")
            },
            body: form
        })
            .then(response => response.json());

        console.log('[RallyAPICalls] callModifyRallyAPI RESULT : ', result);

        dispatch({ type: PUT_RALLY, payload: result });
    };
}

// 랠리 검색
export const callSearchRallyAPI = ({ criteria }) => {

    // console.log('[RallyAPICalls] callSearchRallyAPI Call');

    const URL = `http://localhost:8000/api/v1/rallies/search?${criteria}`;

    console.log("URL : ", URL);

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

        console.log('[RallyAPICalls] callSearchRallyAPI RESULT : ', result);

        dispatch({ type: GET_RALLYLIST, payload: result.results })
    }
}