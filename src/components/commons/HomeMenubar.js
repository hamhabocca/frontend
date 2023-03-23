import style from './HomeMenubar.module.css';

function HomeMenubar() {

    return (
        <div className={style.Body}>
            <div className={style.Container}>
                <ul className={style.Rally}>
                    <li><a href='#'>랠리모집</a></li>
                    <li><a href='#'>랠리후기</a></li>
                </ul>
                <ul className={style.Other}>
                    <li><a href='#'>공지</a></li>
                    <li><a href='#'>건의</a></li>
                    <li><a href='#'>로그인</a></li>
                </ul>
            </div>
        </div>
    )
}

export default HomeMenubar;