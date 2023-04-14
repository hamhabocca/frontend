import style from './MyPage.module.css';
import { IoIosFemale } from 'react-icons/io';
import { IoIosMale } from 'react-icons/io';
import { getOneMember } from '../apis/UserAPICalls';
import RallyCardMyPage from '../components/items/RallyCardMyPage';
import MyPageList from '../components/lists/MyPageList';
import ModalDeactivate from '../components/modals/ModalDeactivate'; 
import ModalProfile from "../components/modals/ModalProfile";
import { useDispatch, useSelector } from 'react-redux';
import { open_deleteAccountModal, open_ProfileModal } from '../modules/ModalsModule';

function MyPage(/* member */) {

    const dispatch = useDispatch();

    const deleteAccountState = useSelector(state => state.modalsReducer.deleteAccountState);
    const profileState = useSelector(state => state.modalsReducer.profileState);


    /* 임시로 불러오는 테스트 목적 변수 */
    const member = getOneMember(2);
    
    function GenderIcon() {
    
        if(member.membergender == 'f') {
            return <IoIosFemale/>
        } else {
            return <IoIosMale/>
        }
    }

    /* 원형 프로그레스 바 용도 */
    const RADIUS = 54;
    const CIRCUMFERENCE = 2 * Math.PI * RADIUS;
    const per = 60;
    var progress = per / 100;
    const dashoffset = CIRCUMFERENCE * (1 - progress);
    const circleStyle = { strokeDasharray: CIRCUMFERENCE, strokeDashoffset: dashoffset }

    return (
        <>
            <main className={style.Main}>
                <section className={style.Left}>
                    <div className={style.Profile}>
                        <div className={style.ProfileImg}>
                            이미지
                        </div>
                        <div className={style.Name}>
                            <div className={style.Social}></div>
                            <label>본명임</label>
                            <label className={style.Gender}>{GenderIcon()}</label>
                        </div>
                        <label className={style.Nickname}>{member.membernickname}</label>
                    </div>
                    <div className={style.RiderProfile}>
                        <h4>라이더 프로필</h4>
                        <div className={style.circle_progress_wrap}>
                            <svg className={style.circle_progress} width="120" height="120" viewBox="0 0 120 120">
                                <circle className={style.frame} cx="60" cy="60" r="54" strokeWidth="12" />
                                <circle className={style.bar} cx="60" cy="60" r="54" strokeWidth="12" style={circleStyle} />
                            </svg>
                            <div className={style.ProgressText}>
                                <label>다음 단계까지</label>
                                <label>999km</label>
                            </div>
                        </div>
                        <label>현재 단계 : </label>
                        <div className={style.RiderProfileInfo}>
                            <div>
                                <h4>선호 지역</h4>
                                <label>서울</label>
                            </div>
                            <div>
                                <h4>선호 랠리 타입</h4>
                                <label>초보</label>
                            </div>
                            <div>
                                <h4>랠리 모집 횟수</h4>
                                <label>2</label>
                            </div>
                            <div>
                                <h4>랠리 참여 횟수</h4>
                                <label>10</label>
                            </div>
                        </div>
                        <button onClick={() => { dispatch(open_ProfileModal()) }} className={style.EditProfile}>프로필 수정</button>
                        { profileState && <ModalProfile/> }
                    </div>
                    <div>
                    <button className={style.Deactivate} onClick = {() => { dispatch(open_deleteAccountModal())}}>사이트 탈퇴하기</button>
                    { deleteAccountState && <ModalDeactivate/> }
                    </div>
                </section>
                <section className={style.Right}>
                    <MyPageList typeOfList={'모집'} membercode={member.membercode}/>
                    {/* <MyPageList typeOfList={'신청'} membercode={member.membercode}/> */}
                </section>
            </main>
        </>
    );
}

export default MyPage;