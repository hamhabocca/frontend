import style from './SearchFilter.module.css';
import { BiPlus, BiMinus } from "react-icons/bi";
import sigunguList from '../../data/sigungu.json';
import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { distanceIncrease, distanceDecrease, peopleIncrease, peopleDecrease } from '../../modules/CountModule';

function SearchFilter() {

    const dispatch = useDispatch();

    const distanceCount = useSelector(state => state.countReducer.distanceState);
    const peopleCount = useSelector(state => state.countReducer.peopleState);

    const distanceIncreaseCount = () => dispatch(distanceIncrease());
    const distanceDecreaseCount = () => dispatch(distanceDecrease());
    const peopleIncreaseCount = () => dispatch(peopleIncrease());
    const peopleDecreaseCount = () => dispatch(peopleDecrease());

    const [sigList, setSigList] = useState([]);

    function searchSig(sidoCode) {

        return sigunguList.filter(sig => sig.sig.sig_cd.startsWith(sidoCode));
    }

    const onChangeHandler = (e) => {

        setSigList(searchSig(e.target.value));
    }

    function Sigoon({sig}) {

        return <option value={sig.sig_cd}>{sig.sig.sig_kor_nm}</option>;
    }

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
                            <input type="checkbox" />
                            <label>입문</label>
                        </div>
                        <div>
                            <input type="checkbox" />
                            <label>초보</label>
                        </div>
                        <div>
                            <input type="checkbox" />
                            <label>중수</label>
                        </div>
                        <div>
                            <input type="checkbox" />
                            <label>고수</label>
                        </div>
                        <div>
                            <input type="checkbox" />
                            <label>전설</label>
                        </div>
                    </article>

                    <article className={style.rallylocal}>
                        <h2>랠리 장소</h2>
                        <select id="sido_code" onChange={ onChangeHandler }>
                            <option>시도 선택</option>
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
                        <select id="sigoon_code">
                            <option>시군구 선택</option>
                            { sigList.map( sig => <Sigoon key={ sig.id } sig={ sig }/> ) }
                        </select>
                    </article>

                    <article className={style.rallydate}>
                        <h2>랠리 일정</h2>
                        <input type="month" min="2023-01" max="2023-12"></input>
                    </article>

                    <article className={style.rallydistance}>
                        <h2>랠리 거리</h2>
                        <div>
                            <button type='button' onClick={distanceDecreaseCount}><BiMinus /></button>
                            <label>{ distanceCount }km</label>
                            <button type='button' onClick={distanceIncreaseCount}><BiPlus /></button>
                        </div>
                    </article>

                    <article className={style.rallypeople}>
                        <h2>랠리 인원</h2>
                        <div>
                            <button type='button' onClick={peopleDecreaseCount}><BiMinus /></button>
                            <label>{ peopleCount }명</label>
                            <button type='button' onClick={peopleIncreaseCount}><BiPlus /></button>
                        </div>
                    </article>
                </section>
                <input type='submit' value='랠리 검색' className={style.search}></input>
            </form>

            <article className={style.recruit}>
                <p>랠리장이 되어보세요!</p>
                <button>모집 작성</button>
            </article>
        </div>
    );
}

export default SearchFilter;