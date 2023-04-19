import style from './Login.module.css';
import { useGoogleLogin } from '@react-oauth/google';

const KAKAO_REST_API_KEY = process.env.REACT_APP_KAKAO_REST_API_KEY;
const KAKAO_REDIRECT_URI = 'http://localhost:3000/oauth';
const KAKAO_AUTH_URI = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_REST_API_KEY}&redirect_uri=${KAKAO_REDIRECT_URI}&response_type=code`;

const NAVER_CLIENT_ID = process.env.REACT_APP_NAVER_CLIENT_ID;
const NAVER_CLIENT_SECRET = process.env.REACT_APP_NAVER_CLIENT_SECRET;
const NAVER_REDIRECT_URI = encodeURI('http://localhost:3000/oauth1');
const NAVER_STATE_STRING = 'test';
const NAVER_AUTH_URI = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${NAVER_CLIENT_ID}&redirect_uri=${NAVER_REDIRECT_URI}&state=${NAVER_STATE_STRING}`;

const loginHandler = (platform) => {

    switch(platform) {
        case 'N' :
            window.location.href = NAVER_AUTH_URI;
            break;
        case 'G' :
            break;
        case 'K' :
            window.location.href = KAKAO_AUTH_URI;
            break;

    }
}

function Login() {

    const login = useGoogleLogin({
        onSuccess: tokenResponse => console.log(tokenResponse),
    });

    return (
        <main className={style.Container}>
            <img src="./img/Logo_blue.png" alt='Logo_blue' />
            <section className={style.LoginBox}>
                <h1>간편 로그인</h1>
                <div className={style.Buttons}>
                    {/* <button className={style.Google} onClick={() => login()}><img src='./img/google.png' />구글로 로그인</button> */}
                    <button className={style.Naver} onClick={() => loginHandler('N')}><img src='./img/naver.png' />네이버로 로그인</button>
                    <button className={style.Kakao} onClick={() => loginHandler('K')}><img src='./img/kakao.png' />카카오로 로그인</button>
                </div>
            </section>
        </main>
    );
}

export default Login;

