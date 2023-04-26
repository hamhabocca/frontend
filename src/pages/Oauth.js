import { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { callKakaoLoginAPI } from "../apis/LoginAPICalls";
import { useDispatch, useSelector } from "react-redux";
import Loading from '../components/commons/Loading';

function Oauth() {

    const code = new URL(window.location.href).searchParams.get('code');

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const loginStatus = useSelector(state => state.loginReducer);

    const loading = useSelector(state => state.loadingReducer);

    useEffect(
        () => {

            dispatch(callKakaoLoginAPI(code));

        }
    )

    return (
        <>
            <div>
                {loading ? <Loading /> :
                    <>
                        <h6>로그인 완료!</h6>
                        {loginStatus && <NavLink to='/'>메인으로 돌아가기</NavLink>}
                    </>
                }
            </div>
        </>
    )

}


export default Oauth;