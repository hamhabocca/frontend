import { NavLink } from 'react-router-dom';
import style from './HomeMenubar.module.css';

function HomeMenubar() {

    return (
        <div className={style.Body}>
            <div className={style.Container}>
                <ul className={style.Rally}>
                    <li><NavLink to='/rally'>랠리모집</NavLink></li>
                    <li><NavLink to='/review'>랠리후기</NavLink></li>
                </ul>
                <ul className={style.Other}>
                    <li><NavLink to='/notice'>공지</NavLink></li>
                    <li><NavLink to='/qna'>건의</NavLink></li>
                    <li><NavLink to='/login'>로그인</NavLink></li>
                </ul>
            </div>
        </div>
    )
}

export default HomeMenubar;
