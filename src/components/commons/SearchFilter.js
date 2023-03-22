import style from './SearchFilter.module.css';
import { BiPlus, BiMinus } from "react-icons/bi";

function SearchFilter() {

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
                        <select id="sido_code">
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
                        </select>
                    </article>

                    <article className={style.rallydate}>
                        <h2>랠리 일정</h2>
                        <input type="date"></input>
                    </article>

                    <article className={style.rallydistance}>
                        <h2>랠리 거리</h2>
                        <div>
                            <button><BiMinus /></button>
                            <label>00km</label>
                            <button><BiPlus /></button>
                        </div>
                    </article>

                    <article className={style.rallypeople}>
                        <h2>랠리 인원</h2>
                        <div>
                            <button><BiMinus /></button>
                            <label>00명</label>
                            <button><BiPlus /></button>
                        </div>
                    </article>
                    
                </section>
                <button className={style.search}>랠리 검색</button>
            </form>

            <article className={style.recruit}>
                <p>랠리장이 되어보세요!</p>
                <button>모집 작성</button>
            </article>
        </div>
    );
}

export default SearchFilter;