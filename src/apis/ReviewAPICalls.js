import { GET_REVIEW, GET_REVIEWLIST } from '../modules/ReviewModule';
import { useSelector } from 'react-redux';

// 전체 리뷰 리스트 조회
export const callReviewListAPI = ({currentPage}) => {

    let URL;

    if(currentPage !== undefined || currentPage !== null){
        URL = `http://localhost:8000/api/v1/reviews?page=${currentPage}`;
    }else{
        URL = 'http://localhost:8000/api/v1/reviews';
    }

    console.log('[ReviewAPICalls] URL :', URL);

    return async (dispatch, getState) => {

        const result = await fetch(URL, {
            method: "GET",
            headers: {
                "Content-type":"application/json",
                "Accept": "*/*"
            }
        })
        .then(response => response.json());

        if(result.httpStatus === 200){
            console.log('[ReviewAPICalls] callReviewListAPI RESULT :', result.results);
            dispatch({ type: GET_REVIEWLIST, payload: result.results});
        }
    }
}

/* 상세 조회 */
export const callReviewDetailAPI = ({reviewId}) => {
    const URL = `api/v1/reviews/${reviewId}`;

    
    return async (dispatch, getState) => {
        
        const result = await fetch(URL, {
            method: "GET",
            headers: {
                "Content-type":"application/json",
                "Accept": "*/*"
            }
        })
        .then(response => response.json());
        
        console.log('[ReviewDetailAPICalls] URL: ', URL);
        if(result.status === 200){
            console.log('[ReviewDetailAPICalls] callReviewDetailAPI RESULT :', result);
            dispatch({ type: GET_REVIEW, payload: result});
        }
        else{
            console.log("데이터 안돼");
        }

    };
    
}



// export function getRallyReviewDetail(rallyCode){
//     return rallys.filter(rally => rally.rallycode === review.rallyCode)[0];
// }


// export function getReviewDetail(reviewId){
//     return reviews.filter(review => review.reviewId === parseInt(reviewId))[0];
// }

export function searchReview(reviewTitle){
    // return reviews.filter(review => review.reviewname.match(reviewTitle));
}

export function getReviewList() {

    // const result = [...reviews].reverse();

    // return result;
}