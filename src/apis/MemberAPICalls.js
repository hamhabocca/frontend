import { async } from "q";
import { GET_MEMBER } from "../modules/MemberModule";
import { GET_RALLYLIST } from "../modules/RallyModule";

export const getMembers = async () => {
    
    /* 백엔드에 토큰 보내기 */
    const token = window.localStorage.getItem('jwtToken');

    const requestURL = 'http://localhost:8000/api/v1/members'

    const result = await fetch(requestURL, {
        method: 'GET',
        headers: {
            "Content-Type": 'application/json',
            "Accept": '*/*',
            "Auth": token
        }
    }).then(res => res.json());

    console.log('[MemberAPICalls] getMembers RESULT : ', result);
    if(result.httpStatus === 200){
        console.log("성공이다~~~~");
    } else if(result.httpStatus === 401) {
        
        console.log("만료됨...");

    }
    // dispatch({ type: POST_LOGIN,  payload: result });

    console.log(result);
}

/* 현재 로그인 된 멤버 정보 가져오기 */
export const getCurrentMember = () => {

    const token = window.localStorage.getItem('jwtToken');

    const requestURL = 'http://localhost:8000/api/v1/members/auth'

    return async (dispatch, getState) => {

        const result = await fetch(requestURL, {
            method: 'GET',
            headers: {
                "Content-Type": 'application/json',
                "Accept": '*/*',
                "Auth": token
            }
        }).then(res => res.json());
    
        console.log('[MemberAPICalls] getCurrentMember RESULT : ', result);
        if(result.httpStatus === 200){
            console.log("성공이다~~~~");
            dispatch({ type: GET_MEMBER,  payload: result.results.member });
        } else if(result.httpStatus === 401) {
            
            console.log("만료됨...");
    
        }
    };
}

/* 현재 로그인 된 멤버가 모집한 랠리 가져오기 */
export const getRecruitedRallies = () => {

    const token = window.localStorage.getItem('jwtToken');

    const requestURL = `http://localhost:8000/api/v1/members/recruit`

    return async (dispatch, getState) => {

        const result = await fetch(requestURL, {
            method: 'GET',
            headers: {
                "Content-Type": 'application/json',
                "Accept": '*/*',
                "Auth": token
            }
        }).then(res => res.json());
    
        console.log('[MemberAPICalls] getRecruitedRallies RESULT : ', result);
        if(result.httpStatus === 200){
            console.log("성공이다~~~~");
            dispatch({ type: GET_RALLYLIST,  payload: result.results });
        } else if(result.httpStatus === 401) {
            
            console.log("만료됨...");
    
        }
    };
}

/* 현재 로그인 된 멤버가 탈퇴 */
export const deactivateMember = () => {

    const token = window.localStorage.getItem('jwtToken');

    const memberId = JSON.parse(token).memberId;

    const requestURL = `http://localhost:8000/api/v1/members/${memberId}?type=deactivate`

    return async (dispatch, getState) => {

        const result = await fetch(requestURL, {
            method: 'PUT',
            headers: {
                "Content-Type": 'application/json',
                "Accept": '*/*',
                "Auth": token
            },
        })
        // .then(res => res.json());
    
        console.log('[MemberAPICalls] deactivateMember RESULT : ', result);
        if(result.httpStatus === 200){
            console.log("성공이다~~~~");
            dispatch({ type: GET_RALLYLIST,  payload: result.results });
        } else if(result.httpStatus === 401) {
            
            console.log("만료됨...");
    
        }
    };
}