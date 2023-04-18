import axios from "axios";
import { POST_LOGIN } from "../modules/MemberModule";

export const callLoginAPI = (code) => {

    const requestURL = 'http://localhost:8000/api/v1/login/kakaocode';

    console.log(code);

    console.log('test 1');

    return async (dispatch, getState) => {

        let data = { code: code }
        
        console.log(requestURL);

        const result = await fetch(requestURL, {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json',
                "Accept": '*/*'
            },
            body: JSON.stringify(data)
        }).then(res => res.json());

        console.log('[MemberAPICalls] callLoginAPI RESULT : ', result);
        if(result.httpStatus === 200){
            window.localStorage.setItem('jwtToken', JSON.stringify(result.results.token));            
        } else if(result.httpStatus === 401) {
            
            console.log("만료됨...")

        }
        dispatch({ type: POST_LOGIN,  payload: result });

    };
}

export const callLogoutAPI = () => {

    console.log('test1');
    
    return async (dispatch, getState) => {  
        
        console.log('test2');

        dispatch({ type: POST_LOGIN,  payload: '' });      
        console.log('[MemberAPICalls] callLogoutAPI RESULT : SUCCESS');
    };
}