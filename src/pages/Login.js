import style from './Login.module.css';
import { useGoogleLogin } from '@react-oauth/google';

// const KAKAO_REST_API_KEY = process.env.REACT_APP_KAKAO_REST_API_KEY;
const KAKAO_REST_API_KEY = 'b6ed15cc6705233690f08417571cc3c0';
const REDIRECT_URI = 'http://localhost:3000/oauth';

const KAKAO_AUTH_URI = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

const Naver = () => {

    const clientId = '';

    const stateString = '';

    const callbackUrl = '';

    const naverAuthUrl = ``;

}

const loginHandler = (platform) => {

    switch(platform) {
        case 'N' :
            // window.location.href = naverAuthUrl;
            break;
        case 'G' :
            break;
        case 'K' :
            window.location.href = KAKAO_AUTH_URI;
            // window.open(KAKAO_AUTH_URI, '_blank');
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
                    <button className={style.Google} onClick={() => login()}><img src='./img/google.png' />구글로 로그인</button>
                    <button className={style.Naver}><img src='./img/naver.png' />네이버로 로그인</button>
                    <button className={style.Kakao} onClick={() => loginHandler('K')}><img src='./img/kakao.png' />카카오로 로그인</button>
                </div>
            </section>
        </main>
    );
}

export default Login;

