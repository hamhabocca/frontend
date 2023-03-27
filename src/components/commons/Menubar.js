import { NavLink } from 'react-router-dom';
import style from './Menubar.module.css';

function Menubar() {

    const activeStyle = {
        boxShadow: 'inset 0 -10px 0 white'
    }

    return (
        <nav className={style.wrap}>
            <div className={style.container}>
                <ul className={style.Rally}>
                    <li className={style.ssibal}><NavLink to='/'><img src='./img/logo.png' className={style.logo}/></NavLink></li>
                    <li><NavLink to='/rally' style={ ({isActive}) => isActive? activeStyle: undefined }>랠리모집</NavLink></li>
                    <li><NavLink to='/review' style={ ({isActive}) => isActive? activeStyle: undefined }>랠리후기</NavLink></li>
                </ul>
                <ul className={style.Other}>
                    <li><NavLink to='/notice' style={ ({isActive}) => isActive? activeStyle: undefined }>공지</NavLink></li>
                    <li><NavLink to='/qna' style={ ({isActive}) => isActive? activeStyle: undefined }>건의</NavLink></li>
                    <li><NavLink to='/mypage'>마이페이지</NavLink></li>
                </ul>
            </div>
        </nav>

    );
}

export default Menubar;