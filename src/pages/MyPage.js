import style from './MyPage.module.css';
import { IoIosFemale } from 'react-icons/io';

function MyPage() {

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
                            <label>김냥냥</label>
                            <label className={style.Gender}><IoIosFemale /></label>
                        </div>
                        <label className={style.Nickname}>닉네임</label>
                    </div>
                    <div className={style.RiderProfile}>
                        <h4>나의 라이더 프로필</h4>
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
                        <button className={style.EditProfile}>프로필 수정</button>
                    </div>
                    <button className={style.Deactivate}>사이트 탈퇴하기</button>
                </section>
                <section className={style.Right}>

                </section>
            </main>
        </>
    );
}

export default MyPage;