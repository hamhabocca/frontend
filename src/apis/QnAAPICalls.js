import { useNavigate } from "react-router-dom";
import { GET_QNALIST, GET_QNA, POST_QNA, PUT_QNA, DELETE_QNA } from "../modules/QnaModule";
import QnAList from "../components/lists/QnAList";

/// 전체 조회
export const callQnaListAPI = ({ currentPage }) => {
    let URL;
    const token = window.localStorage.getItem('jwtToken');

    if (currentPage !== undefined || currentPage !== null) {
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
                "Accept": "*/*",
                "Auth": token
            }
        }).then(response => response.json());

        if (result.httpStatus === 200) {
            console.log('[QnaAPICalls] callQnaListAPI RESULT : ', result);
            // dispatch({ type: GET_QNALIST, payload: result.results });

            const qnaList = result.results.qnaList.content;
            const paging = result.results.paging;

            if (qnaList.length > 0) {
                const memberIdList = qnaList.map((qna) => qna.memberId);

                // member 데이터와 qna 데이터를 가져오는 API endpoint를 호출
                const memberResult = await fetch(
                    `http://localhost:8000/api/v1/members?${memberIdList
                        .map((id) => `id=${id}`)
                        .join("&")}`,
                    {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json",
                            Accept: "*/*",
                            Auth: token
                        },
                    }
                ).then((response) => response.json());

                console.log("[QnaMemberAPICalls] memberResult: ", memberResult);

                if (memberResult.httpStatus === 200) {
                    // member 엔티티 정보와 함께 qna 엔티티 정보를 dispatch
                    const memberMap = new Map(
                        memberResult.results.members.content.map((member) => [
                            member.memberId,
                            member,
                        ])
                    );
                    const qnaDataList = qnaList.map((qna) => ({
                        ...qna,
                        member: memberMap.get(qna.memberId)
                    }));

                    dispatch({ type: GET_QNALIST, payload: { qnaDataList, paging } });
                }
            }
        }
    }
};


// 선택 조회 
export const callQnaDetailAPI = ({ qnaId }) => {

    const URL = `http://localhost:8000/api/v1/qnas/${qnaId}`;

    console.log(URL)

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
        // .catch(console.error("에러발생"));

        if (result.httpStatus === 200) {
            console.log('[QnaAPICalls] callQnaDetailAPI SUCCESS', result);
            dispatch({ type: GET_QNA, payload: result.results.qnas })
            const memberId = result.results.qnas.memberId;

            const [qnaResult, memberResult] = await Promise.all([
                fetch(`http://localhost:8000/api/v1/qnas/${qnaId}`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "*/*",
                        "Auth": token
                    }
                }).then(response => response.json()),

                fetch(`http://localhost:8000/api/v1/members/${memberId}`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "*/*",
                        "Auth": token
                    }
                }).then(response => response.json())
            ]);

            if (qnaResult.httpStatus === 200 && memberResult.httpStatus === 200) {

                const qnaData = { ...result.results.qnas, qna: qnaResult.results.qna, member: memberResult.results.member };

                dispatch({ type: GET_QNA, payload: qnaData });
                console.log("GET_QNA에 넣은 값 : ", qnaData);
            }
            else {
                console.log("데이터 안돼");  //멤버 데이터
            }
        }
        else {
            console.log("데이터 안돼");   //리뷰 데이터
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
                "Auth": token
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

    const URL = `http://localhost:8000/api/v1/qnas/${qnaId}`;

    const token = window.localStorage.getItem('jwtToken');

    return async (dispatch, getState) => {

        const result = await fetch(URL, {
            method: "PUT",
            headers: {
                "Accept": "*/*",
                "Auth": token
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

    console.log('뭐가 담겼나...:' + criteria);

    const URL = `http://localhost:8000/api/v1/qnas/search?${criteria}`;

    const token = window.localStorage.getItem('jwtToken');

    console.log("URL : ", URL);

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
            .catch(error => console.error("에러발생"));

        console.log('[QnaAPICalls] callSearchQnaAPI RESULT : ', result);

        // dispatch({ type: GET_QNALIST, payload: result.results })

        if (result.httpStatus === 200) {

            const qnaList = result.results.qnaList;
            const paging = result.results.paging;

            if (qnaList.length > 0) {
                const memberIdList = qnaList.map((qna) => qna.memberId);

                // member 데이터와 qna 데이터를 가져오는 API endpoint를 호출
                const memberResult = await fetch(
                    `http://localhost:8000/api/v1/members?${memberIdList
                        .map((id) => `id=${id}`)
                        .join("&")}`,
                    {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json",
                            Accept: "*/*",
                            Auth: token
                        },
                    }
                ).then((response) => response.json());

                console.log("[QnaMemberAPICalls] memberResult: ", memberResult);

                if (memberResult.httpStatus === 200) {
                    // member 엔티티 정보와 함께 qna 엔티티 정보를 dispatch
                    const memberMap = new Map(
                        memberResult.results.members.content.map((member) => [
                            member.memberId,
                            member,
                        ])
                    );
                    const qnaDataList = qnaList.map((qna) => ({
                        ...qna,
                        member: memberMap.get(qna.memberId)
                    }));

                    dispatch({ type: GET_QNALIST, payload: { qnaDataList, paging } });
                }
            }
        }
    }
}

// 삭제
export const callQnaDeleteAPI = ({ qnaId }) => {

    const URL = `http://localhost:8000/api/v1/qnas/${qnaId}`;

    console.log(URL)

    const token = window.localStorage.getItem('jwtToken');

    return async () => {

        const result = await fetch(URL, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*",
                "Auth": token
            }
        })
        console.log(result)

        if (result.status === 204) {
            console.log('[QnaAPICalls] callQnaDeleteAPI SUCCESS', result);
            window.location.replace('http://localhost:3000/qna');
        }
    }
}


export function getQnAList() { };
