import { useEffect } from "react";
import style from './RallyCardMyPage.module.css';
import {BiCalendarCheck} from 'react-icons/bi';

function RallyCardMyPage({rally}) {

    var index = rally.rallyLocation.indexOf( ' ', rally.rallyLocation.indexOf( ' ' ) + 1 );

    const rallylocation = rally.rallyLocation.substr(0, index);
    const rallystarttime = new Date(rally.rallyDate);

    const rallyStatus = rally.rallyStatus;

    // const isReviewWritten = checkReviewStatus(rally.rallycode);

    const availableOptions = () => {
        if(rallyStatus == 'currentRecruit') {
            switch (rally.rallyStatus) {
                case "ready":
                    return <button className={style.button} style={{ background: '#7D7D7D' }}>
                        나의 후기
                    </button>;
                default:
                    return <button className={style.button} style={{ background: '#D9D9D9' }}>
                        모집중
                    </button>;
            }   
        } else if(rallyStatus == 'currentRecruit') {
            switch (rally.rallyStatus) {
                case "ready":
                    return <button className={style.button} style={{ background: '#056DFA' }}>
                        후기
                    </button>;
                default:
                    return <button className={style.button} style={{ background: '#D9D9D9' }}>
                        모집중
                    </button>;
            }   
        }
        if(rallyStatus == '') {
            switch (rally.rallyStatus) {
                case "ready":
                    return <button className={style.button} style={{ background: '#7D7D7D' }}>
                        후기
                    </button>;
                case "done":
                    return <button className={style.button} style={{ background: '#7D7D7D' }}>
                        후기
                    </button>;
                case "cancel":
                    return <button className={style.button} style={{ background: '#D9D9D9', color: 'black' }}>
                        랠리취소
                    </button>;
                default:
                    return <button className={style.button} style={{ background: '#D9D9D9' }}>
                        모집중
                    </button>;
            }
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

    const Recruit = () => {
        return null;
    }

    useEffect(
        () => {

        },
        []
    )

    return (
        <div className={style.CardContainer}>
            <div className={style.TypeAndTitle}>
                {rallytype()}
                <label className={style.RallyName}>{rally.rallyName}</label>
            </div>
            <div className={style.Others}>
                <label className={style.Date}><BiCalendarCheck className={style.BiCalendarCheck}/>{rallystarttime.toLocaleDateString().slice(0, -1)}</label>
                <h4>{rallylocation}</h4>
                {availableOptions()}
            </div>
        </div>
    );
}

export default RallyCardMyPage;