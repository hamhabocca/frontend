import { Link } from 'react-router-dom';
import style from './RallyCardBoard.module.css';

function RallyCardBoard({ rally }) {


    /* 랠리 아이디 */
    const RALLY_ID = rally.rallyId;

    /* 랠리 상태 */
    const RALLY_STATUS = rally.rallyStatus;

    /* 랠리 타입 */
    const RALLY_TYPE = rally.rallyType;

    /* 랠리팀명 */
    const RALLY_NAME = rally.rallyName;

    /* 랠리 일정 */
    const RALLY_DATE = new Date(rally.rallyDate).toLocaleDateString().slice(0, -1);

    /* 모집지역 */
    const RALLY_LOCATION = rally.rallyLocation.split(' ')[1];

    /* 작성일 */
    const RALLY_WRITE_DATE = new Date(rally.rallyWriteDate).toLocaleDateString().slice(0, -1);


    /* 랠리 상태 */
    const rallyStatus = () => {
        switch (RALLY_STATUS) {
            case "모집완료":
                return <div style={{ background: '#FF7A00' }}>모집마감</div>;
            case "완주!":
                return <div style={{ background: '#056DFA' }}>완주!</div>;
            case "취소됨":
                return <div style={{ background: '#D9D9D9', color: 'black' }}>랠리취소</div>;
            default:
                return <div style={{ background: '#63AF73' }}>모집중</div>;
        }
    };

    /* 랠리 타입 구분 */
    const rallyType = () => {
        switch (RALLY_TYPE) {
            case "초보":
                return <div style={{ background: '#60A3FF' }}>초보</div>;
            case "중수":
                return <div style={{ background: '#056DFA' }}>중수</div>;
            case "고수":
                return <div style={{ background: '#0E4288' }}>고수</div>;
            case "전설":
                return <div style={{ background: '#303030' }}>전설</div>;
            default:
                return <div style={{ border: '1.5px solid #056DFA', color: '#056DFA' }}>입문</div>;
        }
    };

    if (RALLY_STATUS === "취소됨") {
        return (
            <Link to={`/rally/${RALLY_ID}`} style={{ textDecoration: 'none', color: '#202020' }}>
                <section className={`${style.category} ${style.cancel}`}>
                    <div className={style.status}>
                        {rallyStatus()}
                    </div>
                    <div className={style.type}>
                        {rallyType()}
                    </div>
                    <div>{RALLY_NAME}</div>
                    <div className={style.date}>
                        {RALLY_DATE}
                    </div>
                    <div>{RALLY_LOCATION}</div>
                    <div>{RALLY_WRITE_DATE}</div>
                </section>
            </Link>
        );
    }

    return (
        <Link to={`/rally/${RALLY_ID}`} style={{ textDecoration: 'none', color: '#202020' }}>
            <section className={style.category}>
                <div className={style.status}>
                    {rallyStatus()}
                </div>
                <div className={style.type}>
                    {rallyType()}
                </div>
                <div>{RALLY_NAME}</div>
                <div className={style.date}>
                    {RALLY_DATE}
                </div>
                <div>{RALLY_LOCATION}</div>
                <div>{RALLY_WRITE_DATE}</div>
            </section>
        </Link>
    );
}

export default RallyCardBoard;