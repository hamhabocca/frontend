import style from './Login.module.css';
import { useGoogleLogin } from '@react-oauth/google';



const Naver = () => {

    const clientId = '';

    const stateString = '';

    const callbackUrl = '';
    
    const naverAuthUrl = ``;
    
    const loginHandler = () => {
        window.location.href = naverAuthUrl;
    }
}

function Login() {
    
    const login = useGoogleLogin({
        onSuccess: tokenResponse => console.log(tokenResponse),
    });

    return (
        <main className={style.Container}>
            <img src="./img/Logo_blue.png" alt='Logo_blue'/>
            <section className={style.LoginBox}>
                <h1>간편 로그인</h1>
                <div className={style.Buttons}>
                    <button className={style.Google} onClick={() => login()}><img src='./img/google.png'/>구글로 로그인</button>
                    <button className={style.Naver}><img src='./img/naver.png'/>네이버로 로그인</button>
                    <button className={style.Kakao}><img src='./img/kakao.png'/>카카오로 로그인</button>
                </div>
            </section>
        </main>
    );
}

export default Login;

