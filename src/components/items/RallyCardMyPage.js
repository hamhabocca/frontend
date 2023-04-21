import style from './RallyCardMyPage.module.css';
import { BiCalendarCheck } from 'react-icons/bi';
import { Link, useNavigate } from "react-router-dom";

function RallyCardMyPage({ rally, typeOfList }) {

    var index = rally.rallyLocation.indexOf(' ', rally.rallyLocation.indexOf(' ') + 1);

    const rallylocation = rally.rallyLocation.substr(0, index);
    const rallystarttime = new Date(rally.rallyDate);

    const rallyStatus = rally.rallyStatus;

    const myId = JSON.parse(window.localStorage.getItem('jwtToken')).memberId;

    const navigate = useNavigate();

    // const isReviewWritten = checkReviewStatus(rally.rallyId, myId);

    function goWriteReview() {
        navigate("/review/write");
    }

    const availableOptions = () => {

        if(typeOfList == '과거' || typeOfList == '모집') {

            switch (rallyStatus) {
                case "완주!":
                    return <Link to={`/review/write?rallyid=${rally.rallyId}`} style={{ color: 'white', textDecoration: 'none' }}><button className={style.button} style={{ background: '#7D7D7D' }}>
                        후기 작성
                        </button></Link>;
                case "모집중":
                    return <button className={style.button} style={{ background: '#D9D9D9' }}>
                        모집중
                    </button>;
                case "모집완료":
                    return <button className={style.button} style={{ background: '#D9D9D9' }}>
                        모집완료
                    </button>;
                case "취소됨":
                    return <button className={style.button} style={{ background: '#D9D9D9' }}>
                        취소됨
                    </button>;
            }
        }

        if(typeOfList == '참여') {

        }

    }

    const rallytype = () => {

        const styleIpmun = {
            border: '1.5px solid #056DFA',
            color: '#056DFA'
        };

        switch (rally.rallyType) {
            default:
                return <div className={style.label} style={styleIpmun}>입문</div>;
            case "초보":
                return <div className={style.label} style={{ background: '#60A3FF' }}>초보</div>;
            case "중수":
                return <div className={style.label} style={{ background: '#056DFA' }}>중수</div>;
            case "고수":
                return <div className={style.label} style={{ background: '#0E4288' }}>고수</div>;
            case "전설":
                return <div className={style.label} style={{ background: '#303030' }}>전설</div>;
        }
    };

    return (
        <Link className={style.CardContainer} to={`/rally/${rally.rallyId}`} style={{ textDecoration: 'none', color: '#202020' }}>
            <div className={style.TypeAndTitle}>
                {rallytype()}
                <label className={style.RallyName}>{rally.rallyName}</label>
            </div>
            <div className={style.Others}>
                <label className={style.Date}><BiCalendarCheck className={style.BiCalendarCheck} />{rallystarttime.toLocaleDateString().slice(0, -1)}</label>
                <h4>{rallylocation}</h4>
                {availableOptions()}
            </div>
        </Link>
    );
}

export default RallyCardMyPage;