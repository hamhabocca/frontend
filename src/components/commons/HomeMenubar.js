import { NavLink } from 'react-router-dom';
import style from './HomeMenubar.module.css';
import { useSelector } from 'react-redux';

function HomeMenubar() {

    const loginStatus = useSelector(state => state.memberReducer)

    console.log(loginStatus.length);

    const loginOrMypage = () => {
        if(localStorage.getItem('jwtToken') != null) {
            return (
                <NavLink to='/mypage'>마이페이지</NavLink>
            )
        } else {
            return (
                <NavLink to='/login'>로그인</NavLink>
            )
        }
    }
    

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
                    <li className={style.Login}>{loginOrMypage()}</li>
                </ul>
            </div>
        </div>
    )
}

export default HomeMenubar;