import { useState } from 'react';
import style from './HomeSearchFilter.module.css';

function HomeSearchFilter() {

    const [distance, setDistance] = useState(0);
    const [people, setPeople] = useState(0);

    return (
        <div className={style.HomeSearchFilter}>
            <form>
                <fieldset className={style.RallyType}>
                    <input type={'checkbox'} id="ipmun" name='rallytype' value={'ipmun'} />
                    <label htmlFor='newb'>입문</label>
                    <input type={'checkbox'} id="chobo" name='rallytype' value={'chobo'} />
                    <label htmlFor='newb'>초보</label>
                    <input type={'checkbox'} id="jungsu" name='rallytype' value={'jungsu'} />
                    <label htmlFor='newb'>중수</label>
                    <input type={'checkbox'} id="gosu" name='rallytype' value={'gosu'} />
                    <label htmlFor='newb'>고수</label>
                    <input type={'checkbox'} id="legend" name='rallytype' value={'legend'} />
                    <label htmlFor='newb'>전설</label>
                    <button className={style.QuestionButton}>?</button>
                </fieldset>
                <fieldset className={style.RallyLocation}>
                    <select name='location1'>
                        <option defaultValue>시/도</option>
                        <option value={'경기'}>경기</option>
                        <option value={'서울'}>서울</option>
                    </select>
                    <select name='location2'>
                        <option defaultValue>시/군/구</option>
                        <option value={'경기'}>경기</option>
                        <option value={'서울'}>서울</option>
                    </select>
                    <input type={'date'}/>
                </fieldset>
                <fieldset className={style.DistanceAndPeople}>
                <fieldset className={style.RallyDistance}>
                    <label>최대 거리</label>
                    <button className={style.MinusButton}>-</button>
                    <label>{distance}km</label>
                    <button className={style.PlusButton}>+</button>
                </fieldset>
                <fieldset className={style.RallyPeople}>
                    <label>최대 인원</label>
                    <button className={style.MinusButton}>-</button>
                    <label>{people}</label>
                    <button className={style.PlusButton}>+</button>
                </fieldset>
                </fieldset>
            </form>
        </div>
    )
}

export default HomeSearchFilter;