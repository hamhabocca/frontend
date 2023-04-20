import style from './MyPage.module.css';
import { IoIosFemale } from 'react-icons/io';
import { IoIosMale } from 'react-icons/io';
import { getCurrentMember, getRecruitedRallies } from '../apis/MemberAPICalls';
import RallyCardMyPage from '../components/items/RallyCardMyPage';
import MyPageList from '../components/lists/MyPageList';
import ModalDeactivate from '../components/modals/ModalDeactivate'; 
import ModalProfile from "../components/modals/ModalProfile";
import { useDispatch, useSelector } from 'react-redux';
import { OPEN_DELETE_ACCOUNT, OPEN_PROFILE } from '../modules/ModalsModule';

function MyPage() {

    const dispatch = useDispatch();

    const deleteAccountState = useSelector(state => state.modalsReducer.deleteAccountState);
    const profileState = useSelector(state => state.modalsReducer.profileState);
    
    const member = useSelector(state => state.memberReducer);

    const recruited = useSelector(state => state.rallyReducer);
    const recruitedList = recruited?.recruitedRallyList;
    const participated = useSelector(state => state.participateReducer);
    const participatedList = participated?.participatedRallyList;

    console.log("recruited : " + recruitedList);
    console.log("participated : " + participatedList);
    
    function GenderIcon() {
        
        if(member?.gender == 'female') {
            return <IoIosFemale/>
        } else {
            return <IoIosMale/>
        }
    }

    function SocialIcon() {

        if(member?.socialLogin == "KAKAO") {
            return <img src='./img/kakao.png' width={'20px'} height={'20px'}/>
        }
    }

    function getPercent() {

        if(member?.mileage != null && member?.mileage > 0) {
            return (
                (member?.mileage - ((member?.level - 1) * 200)) / 200
            )
        }
        return 0;
    }

    function getRemainingKm() {

        return (member?.level * 200) - member?.mileage;
    }
    
    /* 원형 프로그레스 바 용도 */
    const RADIUS = 54;
    const CIRCUMFERENCE = 2 * Math.PI * RADIUS;
    // const per = 60;
    var progress = getPercent();
    const dashoffset = CIRCUMFERENCE * (1 - progress);
    const circleStyle = { strokeDasharray: CIRCUMFERENCE, strokeDashoffset: dashoffset }
    
    useEffect(() => {
        dispatch(getCurrentMember());
    },
    []
    );
    
    useEffect(() => {
        
        dispatch(getRecruitedRallies());
    },
    []
    );

    return (
        <>
            <main className={style.Main}>
                <section className={style.Left}>
                    <div className={style.Profile}>
                        <div className={style.ProfileImg}>
                            이미지
                        </div>
                        <div className={style.Name}>
                            <div className={style.Social}>{SocialIcon()}</div>
                            <label>{member?.nickname}</label>
                            <label className={style.Gender}>{GenderIcon()}</label>
                        </div>
                        <label className={style.Nickname}>{member?.email}</label>
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
                                <label>{getRemainingKm()}km</label>
                            </div>
                        </div>
                        <label>현재 단계 : {member?.level}</label>
                        <div className={style.RiderProfileInfo}>
                            <div>
                                <h4>선호 지역</h4>
                                <label>{member?.preferredLocation}</label>
                            </div>
                            <div>
                                <h4>선호 랠리 타입</h4>
                                <label>{member?.preferredType}</label>
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
                        <button onClick={() => { dispatch({type: OPEN_PROFILE}) }} className={style.EditProfile}>프로필 수정</button>
                        { profileState && <ModalProfile/> }
                    </div>
                    <div>
                    <button className={style.Deactivate} onClick = {() => { dispatch({type: OPEN_DELETE_ACCOUNT})}}>사이트 탈퇴하기</button>
                    { deleteAccountState && <ModalDeactivate/> }
                    </div>
                </section>
                <section className={style.Right}>
                    <MyPageList typeOfList={'모집'} rallyList={recruitedList}/>
                    {/* <MyPageList typeOfList={'신청'} membercode={member.membercode}/> */}
                </section>
            </main>
        </>
    );
}

export default MyPage;