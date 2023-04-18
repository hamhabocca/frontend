import axios from 'axios';

export const getMembers = async () => {
    
    /* 백엔드에 토큰 보내기 */
    const token = window.localStorage.getItem('jwtToken');

    const requestURL = 'http://localhost:8000/api/v1/members/auth'

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