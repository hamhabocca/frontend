import axios from "axios";
import { GET_QNALIST } from "../modules/QnaModule";
import { useSelector } from "react-redux";

// export function getQnAList() {

//     const result = [...qnas].reverse();

//     return result;
// }

// export function getQnADetail(qnaCode) {

//     return qnas.filter(qna => qna.qnacode === parseInt(qnaCode))[0];
// }

// export function searchQnA(qnatitle) {

//     return qnas.filter(qna => qna.qnatitle.match(qnatitle));
// }

export const callQnaListAPI = ({currentPage}) => {

    let URL;
    const token = window.localStorage.getItem('jwtToken');
    const requestURL = 'http://localhost:8000/api/members/auth'

    if(currentPage !== undefined || currentPage !== null) {
        URL = `api/v1/qnas?page=${currentPage}`;
    } else {
        URL = 'api/v1/qnas';
    }

    console.log('[QnaAPICalls] URL : ', URL);

    return async (dispatch, getState) => {
        
        const result = await fetch(requestURL, {
            method: "GET",
            headers: {
                // "Content-Type": "application/json",
                // "Accept": "application/json"
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

export function getQnAList() {};

// export const callQnaListAPI = () => {

//     const requestURL = 'api/v1/qnas';

//     return async (dispatch, getState) => {
        
//         const result = await fetch(requestURL, {
//             method: "GET",
//             headers: {
//                 "Content-Type": "application/json",
//                 "Accept": "*/*"
//             }
//         })
//         .then(response => response.json())
//         .then(res => res.result);
        
//         console.log('[QnaAPICalls] callQnaListAPI RESULT : ', result.result);
//         dispatch({ type: GET_QNALIST, payload: result.results.qnaList.content });

//     }
// };