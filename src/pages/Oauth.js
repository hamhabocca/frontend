import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { callKakaoLoginAPI } from "../apis/LoginAPICalls";
import { useDispatch, useSelector } from "react-redux";

function Oauth() {

    const code = new URL(window.location.href).searchParams.get('code');

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const loginStatus = useSelector(state => state.memberReducer);

    useEffect(
        () => {

            dispatch(callKakaoLoginAPI(code));

            if(loginStatus) {

                console.log(loginStatus)
                
            } else {
                alert("로그인에 실패하였습니다.")
            }
            navigate("/", {replace: true});
        }
    )

return (
    <>
    </>
)

}


export default Oauth;