import { useEffect } from "react";
import { json, useNavigate } from "react-router-dom";

const code = new URL(window.location.href).searchParams.get('code');

const navigate = useNavigate();

useEffect(() => {
    (async () => {
        try {
            const res = await fetch(`api/v1/kakaocode=${code}`).then(raw => json(raw));
            
            const token = res.headers.authorization;
            window.localStorage.setItem('kakaoToken', token);
            navigate('/Home');
        } catch (e) {
            console.error(e);
            navigate('/Home');
        }
    })();
}, []);

return (
    <></>
)

export default Oauth;