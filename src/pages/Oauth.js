import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { callKakaoLoginAPI } from "../apis/LoginAPICalls";
import { useDispatch, useSelector } from "react-redux";

function Oauth() {

    const code = new URL(window.location.href).searchParams.get('code');

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const loginStatus = useSelector(state => state.memberReducer)            

    useEffect(
        () => {
            console.log('로그인시작할거임')
            dispatch(callKakaoLoginAPI(code));
            console.log('로그인끝')
            if(loginStatus) {
                console.log("로그인되어있다네~~")
            } else {
                alert("로그인에 실패하였습니다.")
            }
            navigate("/", {replace: true});
        }
    )

return (
    <></>
)

}


export default Oauth;