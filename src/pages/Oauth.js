import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { callLoginAPI } from "../apis/LoginAPICalls";
import { useDispatch } from "react-redux";

function Oauth() {

    const code = new URL(window.location.href).searchParams.get('code');

    const navigate = useNavigate();

    const dispatch = useDispatch();

    useEffect(
        () => {
            console.log('로그인시작할거임')
            dispatch(callLoginAPI(code));
            console.log('로그인끝')
            navigate('/');
        }
    )

return (
    <></>
)

}


export default Oauth;