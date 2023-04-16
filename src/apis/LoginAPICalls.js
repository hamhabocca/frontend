import axios from "axios";
import { POST_LOGIN } from "../modules/MemberModule";

export const callLoginAPI = (code) => {

    const requestURL = '/api/v1/login/kakaocode';

    console.log(code);

    console.log('test 1');

    return async (dispatch, getState) => {

        let data = { code: code }
        
        // 클라이언트 fetch mode : no-cors 사용시 application/json 방식으로 요청이 불가능
        // 서버에서 cors 허용을 해주어야 함
        const result = await axios.post(requestURL, JSON.stringify(data), {
            headers: {
                "Content-Type": 'application/json',
                "Accept": '*/*',
                "Auth": null
            }
        })

        console.log('[MemberAPICalls] callLoginAPI RESULT : ', result);
        if(result.data.httpStatus === 200){
            window.localStorage.setItem('jwtToken', JSON.stringify(result.data.results.token));            
        }
        dispatch({ type: POST_LOGIN,  payload: result });

    };
}

// /* 백엔드에 토큰 보내기 */
// export const sendTokenAPI = async () => {

//     const token = window.localStorage.getItem('jwtToken');

//     const requestURL = 'api/v1/members/auth'

//     const res = await axios.post('url 여기에', data, {
//         headers: {
//             Auth: token
//         }
//     })
// }