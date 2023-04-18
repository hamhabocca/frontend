import { useEffect } from "react";
import { json, useNavigate } from "react-router-dom";
import { callLoginAPI } from "../../apis/LoginAPICalls";

const code = new URL(window.location.href).searchParams.get('code');

const navigate = useNavigate();

    console.log('로그인시작할거임')
    callLoginAPI(code);
    console.log('로그인끝')
    navigate('/');

return (
    <></>
)

export default Oauth;