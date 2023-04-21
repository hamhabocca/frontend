import { Link } from 'react-router-dom';
import style from './RallyCardMain.module.css';
import { AiOutlineArrowRight } from 'react-icons/ai';

function RallCardMain({ rally }) {

    var index = rally.rallyLocation.indexOf(' ', rally.rallyLocation.indexOf(' ') + 1);

    const rallylocation = rally.rallyLocation.substr(0, index);
    const rallystarttime = new Date(rally.rallyDate);

    /* 랠리 타입 구분 */
    const rallytype = () => {

        const styleIpmun = {
            border: '1.5px solid #056DFA',
            color: '#056DFA'
        };

        switch (rally.rallyType) {
            default:
                return <div className={style.RallyType} style={styleIpmun}>입문</div>;
            case "초보":
                return <div className={style.RallyType} style={{ background: '#60A3FF' }}>초보</div>;
            case "중수":
                return <div className={style.RallyType} style={{ background: '#056DFA' }}>중수</div>;
            case "고수":
                return <div className={style.RallyType} style={{ background: '#0E4288' }}>고수</div>;
            case "전설":
                return <div className={style.RallyType} style={{ background: '#303030' }}>전설</div>;
        }
    };

    return (
        <div className={style.Container}>
            {rallytype()}
            <h3>
                {rally.rallyName}
            </h3>
            <div className={style.DateAndLocation}>
                <label>{rallystarttime.toLocaleDateString().slice(0, -1)}</label>
                <label className={style.RallyLocation}>{rallylocation}</label>
            </div>
            <label className={style.RallyMaster}>{rally.masterId}</label>
            <Link to={`/rally/${rally.rallyId}`}><button><AiOutlineArrowRight /></button></Link>
        </div>
    )
}

export default RallCardMain;