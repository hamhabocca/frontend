import { GET_REVIEW, GET_REVIEWLIST, PUT_REVIEW, POST_REVIEW, DELETE_REVIEW } from '../modules/ReviewModule';
import { useSelector } from 'react-redux';

// 전체 리뷰 리스트 조회
export const callReviewListAPI = ({ currentPage }) => {

    const token = window.localStorage.getItem('jwtToken');

    let URL;

    if (currentPage !== undefined || currentPage !== null) {
        URL = `http://localhost:8000/api/v1/reviews?page=${currentPage}`;
    } else {
        URL = 'http://localhost:8000/api/v1/reviews';
    }

    console.log('[ReviewAPICalls] URL :', URL);

    return async (dispatch, getState) => {

        const result = await fetch(URL, {
            method: "GET",
            headers: {
                "Content-type": "application/json",
                "Accept": "*/*",
                "Auth": token
            }
        })
            .then(response => response.json());

        if (result.httpStatus === 200) {
            console.log('[ReviewAPICalls] callReviewListAPI RESULT :', result);
            dispatch({ type: GET_REVIEWLIST, payload: result.results });
        }
    };
}

/* 상세 조회 */
export const callReviewDetailAPI = ({ reviewId }) => {

    const URL = `http://localhost:8000/api/v1/reviews/${reviewId}`;

    const token = window.localStorage.getItem('jwtToken');

    return async (dispatch, getState) => {

        const result = await fetch(URL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*",
                "Auth": token
            }
        })
            .then(response => response.json())

        console.log('[ReviewDetailAPICalls] URL: ', result);

        if (result.httpStatus === 200) {
            console.log('[ReviewDetailAPICalls] callReviewDetailAPI SUCCESS ');
            dispatch({ type: GET_REVIEW, payload: result.results.reviews });
        }
        else {
            console.log("데이터 안돼");
        }
    };
}

/* 데이터 수정 */
export const callReviewUpdateAPI = ({ form, reviewId }) => {

    const URL = `http://localhost:8000/api/v1/reviews/${reviewId}`;

    const token = window.localStorage.getItem('jwtToken');

    return async (dispatch, getState) => {

        const result = await fetch(URL, {
            method: "PUT",
            headers: {
                // "Content-Type": 'application/json',
                "Accept": '*/*',
                "Auth": token
            },
            body: form
        })
        // .then(response => response.json());

        console.log('[ReviewAPICalls] callReviewUpdateAPI RESULT : ', result);

        if (result.status === 201) {
            console.log('[ReviewUpdateAPICalls] callReviewUpdateAPI SUCCESS ');
            dispatch({ type: PUT_REVIEW, payload: result });
        }
        else {
            console.log("데이터 안돼");
        };
    }
}


/* 리뷰 등록 */
export const callPostReviewAPI = ({ form }) => {

    console.log("[ReviewAPICalls] callPostReviewAPI Call");
    
    const token = window.localStorage.getItem('jwtToken');

    const URL = 'http://localhost:8000/api/v1/reviews';

    return async (dispatch, getState) => {

        const result = await fetch(URL, {
            method: "POST",
            headers: {
                "Accept": "*/*",
                "Auth": token
            },
            body: form
        })
        .then(response => response.json());

        console.log("[ReviewAPICalls] callPostReviewAPi Result : ", result);

        dispatch({ type: POST_REVIEW, payload: result });
    };
}


// 삭제
export const callReviewDeleteAPI = ({ reviewId }) => {

    const URL = `http://localhost:8000/api/v1/reviews/${reviewId}`;

    console.log(URL)

    const token = window.localStorage.getItem('jwtToken');

    return async (dispatch, getState) => {

        const result = await fetch(URL, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*",
                "Auth": token
            }
        })
        console.log(result);

        if (result.status === 204) {
            
            console.log('[ReviewAPICalls] callReviewDeleteAPI SUCCESS', result);
            window.location.replace('http://localhost:3000/review');
        }
    };
}









// export function getRallyReviewDetail(rallyCode){
//     return rallys.filter(rally => rally.rallycode === review.rallyCode)[0];
// }


// export function getReviewDetail(reviewId){
//     return reviews.filter(review => review.reviewId === parseInt(reviewId))[0];
// }

export function searchReview(reviewTitle) {
    // return reviews.filter(review => review.reviewname.match(reviewTitle));
}

// export function getReviewList() {

//     // const result = [...reviews].reverse();

//     // return result;
// }