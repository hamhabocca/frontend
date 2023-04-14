import axios from "axios";
import { POST_LOGIN } from "../modules/MemberModule";

export const callLoginAPI = (code) => {

    const requestURL = '/api/v1/login/kakaocode';

    console.log(code);

    console.log('test 1');

    return async (dispatch, getState) => {

        console.log('에이씨발');
        
        // 클라이언트 fetch mode : no-cors 사용시 application/json 방식으로 요청이 불가능
        // 서버에서 cors 허용을 해주어야 함
        const result = await axios.get(requestURL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*" 
            },
            body: {code}
        });
        // .then(response => response.json());

        console.log('[MemberAPICalls] callLoginAPI RESULT : ', result);
        if(result.httpStatus === 200){
            // window.localStorage.setItem('accessToken', result.data.accessToken);            
        }
        dispatch({ type: POST_LOGIN,  payload: result });

    };
}