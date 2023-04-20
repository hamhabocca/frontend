import { GET_QNALIST, GET_QNA, POST_QNA, PUT_QNA } from "../modules/QnaModule";

// 전체 목록 조회
export const callQnaListAPI = ({currentPage}) => {

    let URL;

    const token = window.localStorage.getItem('jwtToken');

    // const requestURL = 'http://localhost:8000/api/members/auth'

    if(currentPage !== undefined || currentPage !== null) {
        URL = `http://localhost:8000/api/v1/qnas?page=${currentPage}`;
    } else {
        URL = 'localhost:800/api/v1/qnas';
    }

    console.log('[QnaAPICalls] URL : ', URL);

    return async (dispatch, getState) => {
        
        const result = await fetch(URL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept":"*/*",
                "Auth":token
            }
        })
        .then(response => response.json());

        if(result.httpStatus === 200) {
            console.log('[QnaAPICalls] callQnaListAPI RESULT : ', result.results);
            dispatch({ type: GET_QNALIST, payload: result.results.QnaList.content });
        }
    };
}

// 선택 조회 
export const callQnaDetailAPI = ({ qnaId }) => {

    const URL = `http://localhost:8000/api/v1/qnas/${qnaId}`;

    console.log(URL)

    const token = window.localStorage.getItem('jwtToken');

    return async (dispatch, getState) => {

        const result = await fetch(URL, {
            method: "GET",
            headers: {
                "Content-Type":"application/json",
                "Accept": "*/*",
                "Auth":token
            }
        })
        .then(response => response.json())
        // .catch(console.error("에러발생"));

        if (result.httpStatus === 200) {
            console.log('[QnaAPICalls] callQnaDetailAPI SUCCESS', result);
            dispatch({ type: GET_QNA, payload: result.results.qnas })
        }
    }
}

// 등록
export const callPostQnaAPI = ({ form }) => {

    console.log("form", form)

    console.log("[QnaAPICalls] callPostQnaAPI Call");

    const URL = 'http://localhost:8000/api/v1/qnas';

    const token = window.localStorage.getItem('jwtToken');

    return async (dispatch, getState) => {

        const result = await fetch(URL, {
            method: "POST",
            headers: {
                "Accept": "*/*",
                "Auth":token
            },
            body: form
        })
            .then(response => response.json());

        console.log("[QnaAPICalls] callPostQnaAPI RESULT:", result);

        dispatch({ type: POST_QNA, payload: result });
    };
}

// 수정
export const callModifyRallyAPI = ({ form, qnaId }) => {

    console.log('[QnaAPICalls] callModifyQnaAPI Call');

    const token = window.localStorage.getItem('jwtToken');

    const URL = `http://localhost:8000/api/v1/qnas/${qnaId}`;

    console.log("URL", URL);

    return async (dispatch, getState) => {

        const result = await fetch(URL, {
            method: "PUT",
            headers: {
                "Accept": "*/*",
                "Auth":token
            },
            body: form
        })
            .then(response => response.json());

        console.log('[QnaAPICalls] callModifyQnaAPI RESULT : ', result);

        dispatch({ type: PUT_QNA, payload: result });
    };
}

// 검색
export const callSearchQnaAPI = ({ criteria }) => {

    console.log('[QnaAPICalls] callSearchQnaAPI Call');

    const URL = `http://localhost:8000/api/v1/qns/search?${criteria}`;

    console.log("URL : ", URL);

    return async (dispatch, getState) => {

        const result = await fetch(URL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*"
            }
        })
            .then(response => response.json())
            .catch(error => console.error("에러발생"));

        console.log('[QnaAPICalls] callSearchQnaAPI RESULT : ', result);

        dispatch({ type: GET_QNALIST, payload: result.results })
    }
}






export function getQnAList() {};

