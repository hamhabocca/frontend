import { NavLink } from 'react-router-dom';
import style from './Menubar.module.css';

function Menubar() {

    return (
        <nav className={style.wrap}>
            <div className={style.container}>
                <ul className={style.Rally}>
                    <li><NavLink to='/'><img src='./img/logo.png'/></NavLink></li>
                    <li><NavLink to='/rally'>랠리모집</NavLink></li>
                    <li><NavLink to='/writeReview'>랠리후기</NavLink></li>
                </ul>
                <ul className={style.Other}>
                    <li><NavLink to='/notice'>공지</NavLink></li>
                    <li><NavLink to='/qna'>건의</NavLink></li>
                    <li><NavLink to='/mypage'>마이페이지</NavLink></li>
                </ul>
            </div>
        </nav>

    );
}

export default Menubar;