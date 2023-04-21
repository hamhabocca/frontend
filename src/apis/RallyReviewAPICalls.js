import { GET_REVIEW, GET_REVIEW_RALLY, GET_REVIEWLIST } from "../modules/ReviewModule";


// 랠리+리뷰 상세 조회 API
export const callReviewRallyAPI = ({ reviewId }) => {

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
            .then(response => response.json());

    
        if (result.httpStatus === 200) {
            const rallyId = result.results.reviews.rallyId; // review 엔티티의 rallyId를 가져옴

            const rallyResult = await fetch(`http://localhost:8000/api/v1/rallies/${rallyId}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "*/*",
                    "Auth": token
                }
            })
                .then(response => response.json());

            if (rallyResult.httpStatus === 200) {
                // rally 엔티티 정보와 함께 review 엔티티 정보를 dispatch
                const reviewData = { ...result.results.reviews, rally: rallyResult.results.rally };
                dispatch({ type: GET_REVIEW, payload: reviewData });
                console.log("GET_REVIEW에 넣은 값 : ", reviewData);
            }
            else {
                console.log("데이터 안돼");  //랠리데이터
            }
        }
        else {
            console.log("데이터 안돼");   //리뷰 데이터
        }
    };
}


// 랠리 + 리뷰 보드 리스트 API
export const callReviewRallyListAPI = () => {
    const URL = `http://localhost:8000/api/v1/reviews`;
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
            .then(response => response.json());

        console.log('[ReviewDetailAPICalls] URL: ', result);

        if (result.httpStatus === 200) {
            const reviewList = result.results.reviews;

            if (reviewList.length > 0) { // review가 있는 경우에만 진행
                const rallyIdList = reviewList.map(review => review.rallyId); // 모든 리뷰의 rallyId를 추출

                // rallyIdList에 일치하는 rally 엔티티 정보를 가져오는 API endpoint를 호출
                const rallyResult = await fetch(`http://localhost:8000/api/v1/rallies?${rallyIdList.map(id => `id=${id}`).join('&')}`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "*/*",
                        "Auth": token
                    }
                })
                    .then(response => response.json());

                console.log('[ReviewRallyAPICalls] rallyResult: ', rallyResult);

                if (rallyResult.httpStatus === 200) {
                    // rally 엔티티 정보와 함께 review 엔티티 정보를 dispatch
                    const rallyMap = new Map(rallyResult.results.rallyList.content.map(rally => [rally.rallyId, rally]));
                    const reviewDataList = result.results.reviews.map(review => ({ ...review, rally: rallyMap.get(review.rallyId) }));
                    dispatch({ type: GET_REVIEWLIST, payload: reviewDataList });
                    console.log("reviewDataList : ", reviewDataList);
                } else {
                    console.log("rally 데이터를 가져오지 못했습니다");
                }
            } else {
                console.log("리뷰 데이터가 없습니다");
            }
        } else {
            console.log("데이터를 가져오지 못했습니다");
        }
    };
}
