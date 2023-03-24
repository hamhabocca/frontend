import { useRef, useState } from 'react';
import style from './HomeSearchFilter.module.css';

function HomeSearchFilter() {

    const [distance, setDistance] = useState(0);
    const [people, setPeople] = useState(0);

    const ipmunRef = useRef(null);
    const choboRef = useRef(null);
    const jungsuRef = useRef(null);
    const gosuRef = useRef(null);
    const legendRef = useRef(null);

    const onClickButtonToCheckboxHandler = (e) => {
        switch(e.target.value) {
            case 'ipmun': 
            ipmunRef.current.checked = !(ipmunRef.current.checked); 
            if(ipmunRef.current.checked) {
                e.target.classList.add("selected");
            } else {
                e.target.classList.remove("selected");
            }
            break;
            case 'chobo': 
            choboRef.current.checked = !(choboRef.current.checked); 
            break;
            case 'jungsu': 
            jungsuRef.current.checked = !(jungsuRef.current.checked); 
            break;
            case 'gosu': 
            gosuRef.current.checked = !(gosuRef.current.checked); 
            break;
            case 'legend': 
            legendRef.current.checked = !(legendRef.current.checked); 
            break;
        }
    }

    return (
        <div className={style.HomeSearchFilter}>
            <form>
                <fieldset className={style.RallyType}>
                    <input type={'checkbox'} id="ipmun" name='rallytype' value={'ipmun'} ref={ipmunRef}/>
                    <input type={'checkbox'} id="chobo" name='rallytype' value={'chobo'} ref={choboRef}/>
                    <input type={'checkbox'} id="jungsu" name='rallytype' value={'jungsu'} ref={jungsuRef}/>
                    <input type={'checkbox'} id="gosu" name='rallytype' value={'gosu'} ref={gosuRef}/>
                    <input type={'checkbox'} id="legend" name='rallytype' value={'legend'} ref={legendRef}/>

                    <div type={'button'} onClick={onClickButtonToCheckboxHandler} value='ipmun'>입문</div>
                    <div type={'button'} onClick={onClickButtonToCheckboxHandler} value='chobo'>초보</div>
                    <div type={'button'} onClick={onClickButtonToCheckboxHandler} value='jungsu'>중수</div>
                    <div type={'button'} onClick={onClickButtonToCheckboxHandler} value='gosu'>고수</div>
                    <div type={'button'} onClick={onClickButtonToCheckboxHandler} value='legend'>전설</div>

                    <button className={style.QuestionButton} type='button'>?</button>
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
                    <input type={'month'} />
                </fieldset>
                <fieldset className={style.DistanceAndPeople}>
                    <fieldset className={style.RallyDistance}>
                        <label>최대 거리</label>
                        <button className={style.MinusButton} type={'button'}>-</button>
                        <label>{distance}km</label>
                        <button className={style.PlusButton} type={'button'}>+</button>
                    </fieldset>
                    <fieldset className={style.RallyPeople}>
                        <label>최대 인원</label>
                        <button className={style.MinusButton} type={'button'}>-</button>
                        <label>{people}</label>
                        <button className={style.PlusButton} type={'button'}>+</button>
                    </fieldset>
                </fieldset>
                <input type={'submit'} value='랠리 검색' className={style.Submit}/>
            </form>
        </div>
    )
}

export default HomeSearchFilter;