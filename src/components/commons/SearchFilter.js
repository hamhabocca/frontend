import style from './SearchFilter.module.css';
import { BiPlus, BiMinus } from "react-icons/bi";
import sigunguList from '../../data/sigungu.json';
import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { distanceIncrease, distanceDecrease, peopleIncrease, peopleDecrease } from '../../modules/CountModule';
import { Link } from 'react-router-dom';

function searchSig(sidoCode) {

    return sigunguList.filter(sig => sig.sig.sig_cd.startsWith(sidoCode));
}

function Sigoon({ sig }) {

    return <option value={sig.sig.sig_kor_nm} >{sig.sig.sig_kor_nm}</option>;
}

function SearchFilter() {

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


    /* 체크박스 */
    const checkOnlyOne = (checkThis) => {
        const checkboxes = document.getElementsByName('rallytype')
        for (let i = 0; i < checkboxes.length; i++) {
          if (checkboxes[i] !== checkThis) {
            checkboxes[i].checked = false
          }
        }
      }

    return (
        <div className={style.filter}>
            <article className={style.title}>
                <h1>Filter</h1>
            </article>

            <form className={style.form} action={"/rally/search"}>
                <section>
                    <article className={style.rallytype}>
                        <h2>랠리 타입</h2>
                        <div>
                            <input type="checkbox" id="ipmun" name='rallytype' value={'ipmun'} onChange={(e) => checkOnlyOne(e.target)}/>
                            <label htmlFor='ipmun'>입문</label>
                        </div>
                        <div>
                            <input type="checkbox" id="chobo" name='rallytype' value={'chobo'} onChange={(e) => checkOnlyOne(e.target)}/>
                            <label htmlFor='chobo'>초보</label>
                        </div>
                        <div>
                            <input type="checkbox" id="jungsu" name='rallytype' value={'jungsu'} onChange={(e) => checkOnlyOne(e.target)}/>
                            <label htmlFor='jungsu'>중수</label>
                        </div>
                        <div>
                            <input type="checkbox" id="gosu" name='rallytype' value={'gosu'} onChange={(e) => checkOnlyOne(e.target)}/>
                            <label htmlFor='gosu'>고수</label>
                        </div>
                        <div>
                            <input type="checkbox" id="legend" name='rallytype' value={'legend'} onChange={(e) => checkOnlyOne(e.target)}/>
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
                        <input type="month" min="2023-01" max="2023-12" name='rallydate' />
                    </article>

                    <article className={style.rallydistance}>
                        <h2>랠리 거리</h2>
                        <div>
                            <button type='button' onClick={distanceCountDecrease}><BiMinus /></button>
                            <input name='distance' value={distanceCount} onChange={() => { }} />km
                            <button type='button' onClick={distanceCountIncrease}><BiPlus /></button>
                        </div>
                    </article>

                    <article className={style.rallypeople}>
                        <h2>랠리 인원</h2>
                        <div>
                            <button type='button' onClick={peopleCountDecrease}><BiMinus /></button>
                            <input name='people' value={peopleCount} onChange={() => { }} />명
                            <button type='button' onClick={peopleCountIncrease}><BiPlus /></button>
                        </div>
                    </article>
                </section>
                <input type='submit' value='랠리 검색' className={style.search} />
            </form>

            <article className={style.recruit}>
                <p>랠리장이 되어보세요!</p>
                <Link to='/rally/write' style={{ color: 'white', textDecoration: 'none' }}><button>모집 작성</button></Link>
            </article>
        </div>
    );
}

export default SearchFilter;