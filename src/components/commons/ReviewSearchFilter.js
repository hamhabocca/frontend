import style from './ReviewSearchFilter.module.css';
import { BiPlus, BiMinus } from "react-icons/bi";
import sigunguList from '../../data/sigungu.json';
import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { distanceIncrease, distanceDecrease, peopleIncrease, peopleDecrease } from '../../modules/CountModule';

function searchSig(sidoCode) {

    return sigunguList.filter(sig => sig.sig.sig_cd.startsWith(sidoCode));
}

function Sigoon({ sig }) {

    return <option value={sig.sig.sig_kor_nm} >{sig.sig.sig_kor_nm}</option>;
}

function ReviewSearchFilter() {

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

function ReviewSearchFilter() {

    return (
        <div className={style.filter}>
            <article className={style.title}>
                <h1>Filter</h1>
            </article>

            <form className={style.form}>
                <section>
                    <article className={style.rallytype}>
                        <h2>랠리 타입</h2>
                        <div>
                            <input type="checkbox" id="ipmun" name='rallytype' value={'ipmun'} />
                            <label htmlFor='ipmun'>입문</label>
                        </div>
                        <div>
                            <input type="checkbox" id="chobo" name='rallytype' value={'chobo'} />
                            <label htmlFor='chobo'>초보</label>
                        </div>
                        <div>
                            <input type="checkbox" id="jungsu" name='rallytype' value={'jungsu'} />
                            <label htmlFor='jungsu'>중수</label>
                        </div>
                        <div>
                            <input type="checkbox" id="gosu" name='rallytype' value={'gosu'} />
                            <label htmlFor='gosu'>고수</label>
                        </div>
                        <div>
                            <input type="checkbox" id="legend" name='rallytype' value={'legend'} />
                            <label htmlFor='legend'>전설</label>
                        </div>
                    </article>

                    <article className={style.rallylocal}>
                        <h2>랠리 장소</h2>
                        <select id="sido_code" name='sido' onChange={onChangeHandler} >
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
                        <select id="sigoon_code" name='sigungu' readOnly>
                            <option defaultValue=''>시/군/구</option>
                            {sigList.map(sig => <Sigoon key={sig.id} sig={sig} />)}
                        </select>
                    </article>

                    <article className={style.rallydate}>
                        <h2>랠리 일정</h2>
                        <input type="date" min="2023-01" max="2023-12" name='rallydate' />
                    </article>

                    <article className={style.rallyteam}>
                        <h2>랠리 팀명</h2>
                        <input type = "text"></input>
                    </article>
                    
                </section>
                <button className={style.search}>후기 검색</button>
            </form>

            <article className={style.recruit}>
                <p>랠리 후기를 검색하세요!</p>
                <br/>
                <button>후기 검색</button>
            </article>
        </div>
    );
}

export default ReviewSearchFilter;