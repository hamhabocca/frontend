import { IS_SIGNUP } from "../modules/LoginModule";

export const callKakaoLoginAPI = (code) => {

    const requestURL = 'http://localhost:8000/api/v1/login/kakaocode';

    console.log(code);

    return async (dispatch, getState) => {

        let data = { code: code }
        
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
            dispatch({type: IS_SIGNUP})            
            
        } else if(result.httpStatus === 401) {
            console.log("만료됨...")
        }
    };
}

export const callNaverLoginAPI = (code, state) => {

    console.log(code);

    console.log(state);

    const requestURL = 'http://localhost:8000/api/v1/login/navercode'

    return async (dispatch, getState) => {

        let data = { code: code, state: state }
        
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
    };
}

export const callLogoutAPI = () => {
    
    return async (dispatch, getState) => {  
        
        console.log('test2');

        console.log('[MemberAPICalls] callLogoutAPI RESULT : SUCCESS');
    };
}