import { BiPlus, BiMinus } from "react-icons/bi";
import sigunguList from '../../data/sigungu.json';
import { useRef, useState } from "react";
import style from './HomeSearchFilter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { distanceIncrease, distanceDecrease, peopleIncrease, peopleDecrease } from '../../modules/CountModule';

function searchSig(sidoCode) {

    return sigunguList.filter(sig => sig.sig.sig_cd.startsWith(sidoCode));
}

function Sigoon({ sig }) {

    return <option value={sig.sig.sig_kor_nm} >{sig.sig.sig_kor_nm}</option>;
}

function HomeSearchFilter() {

    /* 시군구 담을 리스트 */
    const [sigList, setSigList] = useState([]);

    const dispatch = useDispatch();

    /* state값 가져오기 */
    const distanceCount = useSelector(state => state.countReducer.distanceState);
    const peopleCount = useSelector(state => state.countReducer.peopleState);

    /* 버튼 클릭이벤트핸들러 */
    const distanceCountIncrease = () => {
        dispatch(distanceIncrease());
    };
    const distanceCountDecrease = () => {
        if (distanceCount > 0) {
            dispatch(distanceDecrease());
        }
    };
    const peopleCountIncrease = () => dispatch(peopleIncrease());
    const peopleCountDecrease = () => {
        if (peopleCount > 0) {
            dispatch(peopleDecrease())
        }
    };

    /* 시도 선택시 시군구 리스트 담음 */
    const onChangeHandler = (e) => {
        setSigList(searchSig(e.target.value));
    }

    return (
        <div className={style.HomeSearchFilter}>
            <form action="/rally/search">
                <fieldset className={style.RallyType}>
                    <div>
                        <input type={'radio'} id="ipmun" name='rallytype' value={'ipmun'}/>
                        <label htmlFor='ipmun'>입문</label>
                    </div>
                    <div>
                        <input type={'radio'} id="chobo" name='rallytype' value={'chobo'} />
                        <label htmlFor='chobo'>초보</label>
                    </div>
                    <div>
                        <input type={'radio'} id="jungsu" name='rallytype' value={'jungsu'} />
                        <label htmlFor='jungsu'>중수</label>
                    </div>
                    <div>
                        <input type={'radio'} id="gosu" name='rallytype' value={'gosu'} />
                        <label htmlFor='gosu'>고수</label>
                    </div>
                    <div>
                        <input type={'radio'} id="legend" name='rallytype' value={'legend'} />
                        <label htmlFor='legend'>전설</label>
                    </div>
                    <button className={style.QuestionButton}>?</button>
                </fieldset>
                <fieldset className={style.RallyLocation}>
                    <select name='sido' id="sido_code" onChange={onChangeHandler}>
                        <option defaultValue>시/도</option>
                        <option value="11">서울특별시</option>
                        <option value="26">부산광역시</option>
                        <option value="27">대구광역시</option>
                        <option value="28">인천광역시</option>
                        <option value="29">광주광역시</option>
                        <option value="30">대전광역시</option>
                        <option value="31">울산광역시</option>
                        <option value="36">세종특별자치시</option>
                        <option value="41">경기도</option>
                        <option value="42">강원도</option>
                        <option value="43">충청북도</option>
                        <option value="44">충청남도</option>
                        <option value="45">전라북도</option>
                        <option value="46">전라남도</option>
                        <option value="47">경상북도</option>
                        <option value="48">경상남도</option>
                        <option value="50">제주특별자치도</option>
                    </select>
                    <select name='sigungu' id="sigoon_code" readOnly>
                        <option defaultValue=''>시/군/구</option>
                        {sigList.map(sig => <Sigoon key={sig.id} sig={sig} />)}
                    </select>
                    <input type="month" min="2023-01" max="2023-12" name='rallydate'/>
                </fieldset>
                <fieldset className={style.DistanceAndPeople}>
                    <fieldset className={style.RallyDistance}>
                        <label>최대 거리</label>
                        <button type='button' onClick={distanceCountDecrease}><BiMinus /></button>
                        <input name='distance' value={distanceCount} onChange={() => { }} />km
                        <button type='button' onClick={distanceCountIncrease}><BiPlus /></button>
                    </fieldset>
                    <fieldset className={style.RallyPeople}>
                        <label>최대 인원</label>
                        <button type='button' onClick={peopleCountDecrease}><BiMinus /></button>
                        <input name='people' value={peopleCount} onChange={() => { }} />명
                        <button type='button' onClick={peopleCountIncrease}><BiPlus /></button>
                    </fieldset>
                </fieldset>
                <input type={'submit'} value='랠리 검색' className={style.Submit} />
            </form>
        </div>
    )
}

export default HomeSearchFilter;