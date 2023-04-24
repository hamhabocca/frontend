import { GET_RALLYLIST, GET_RALLY } from "../modules/RallyModule";

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
                "Accept": "*/*"
            }
        })
            .then(response => response.json());

        if (result.httpStatus === 200) {
            // console.log('[RallyAPICalls] callRallyListAPI RESULT : ', result);
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

        // console.log('[RallyAPICalls] callRallyDetailAPI RESULT : ', result);

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

            // console.log('[RallyAPICalls] callRallyMasterAPI RESULT : ', master);

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

        // console.log("[RallyAPICalls] callPostRallyAPI RESULT:", result);

        if (result.status === 500) {
            alert(result.message);
        }
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

        // console.log('[RallyAPICalls] callModifyRallyAPI RESULT : ', result);
    };
}

// 랠리 검색
export const callSearchRallyAPI = ({ criteria }) => {

    // console.log('[RallyAPICalls] callSearchRallyAPI Call');

    const URL = `http://localhost:8000/api/v1/rallies/search?${criteria}`;

    // console.log("URL : ", URL);

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

        // console.log('[RallyAPICalls] callSearchRallyAPI RESULT : ', result);

        if((result.results.rallyList).length === 0 ) {
            alert('조건에 맞는 랠리를 찾을 수 없습니다.\n다른 조건으로 검색해 주세요!');
        }

        dispatch({ type: GET_RALLYLIST, payload: result.results })
    }
}