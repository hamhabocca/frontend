import { NavLink } from 'react-router-dom';
import style from './HomeMenubar.module.css';

function HomeMenubar() {

    const activeStyle = {
        borderBottom: '2px solid red'
    }

    return (
        <div className={style.Body}>
            <div className={style.Container}>
                <ul className={style.Rally}>
                    <li><NavLink to='/rally' style={ ({isActive}) => isActive? activeStyle: undefined }>랠리모집</NavLink></li>
                    <li><NavLink to='/review' style={ ({isActive}) => isActive? activeStyle: undefined }>랠리후기</NavLink></li>
                </ul>
                <ul className={style.Other}>
                    <li><NavLink to='/notice' style={ ({isActive}) => isActive? activeStyle: undefined }>공지</NavLink></li>
                    <li><NavLink to='/qna' style={ ({isActive}) => isActive? activeStyle: undefined }>건의</NavLink></li>
                    <li><NavLink to='/login'>로그인</NavLink></li>
                </ul>
            </div>
        </div>
    )
}

export default HomeMenubar;