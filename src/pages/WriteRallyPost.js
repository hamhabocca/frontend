import style from './WriteRallyPost.module.css';
import SearchFilter from '../components/commons/SearchFilter';
import EnterRallyAddress from '../components/items/EnterRallyAddress';
import { useDispatch, useSelector } from 'react-redux';
import { reset_state } from '../modules/AddressModule';
import { useState } from 'react';

function WriteRallyPost() {

    const dispatch = useDispatch();

    const onClickHandler = () => {
        console.log('리셋ㅅㅅㅅ');
        dispatch(reset_state());
    };

    const [isClick, setIsClick] = useState(false);
    const toggleHandler = () => setIsClick(!isClick);

    const openAddressInput = isClick ? <EnterRallyAddress /> : null;

    return (
        <main className={style.container}>
            <SearchFilter />
            <section className={style.board}>
                <article className={style.title}>
                    <h1>랠리 모집글 작성</h1>
                    <div>
                        <button className={style.edit} onClick={onClickHandler}>등록</button>
                    </div>
                </article>
                <article className={style.rallyPost}>
                    <form>
                        <div className={style.rallyType}>
                            <h3>*랠리 타입을 선택해주세요</h3>
                            <div></div>
                        </div>
                        <div className={style.rallyName}>
                            <h3>*랠리명을 적어주세요.<p>(글자수제한있음 특수문자 불가)</p></h3>
                            <input type={"text"} />
                        </div>
                        <div className={style.rallyMap}>
                            <div className={style.mapImg}>
                                <h3>랠리 모집 정보</h3>
                                <div></div>
                            </div>
                            <div className={style.mapInfo}>
                                <div className={style.people}>
                                    <h3>*랠리 모집 인원</h3>
                                    <div>
                                        <p>최소</p>
                                        <input type={"text"} />
                                        <p>최대</p>
                                        <input type={"text"} />
                                    </div>
                                </div>
                                <div>
                                    <h3>*랠리 출발 일시</h3>
                                    <input type={"datetime-local"} className={style.dateInput} />
                                </div>
                                <div className={style.estimate}>
                                    <div>
                                        <h3>*예상 완주 일시</h3>
                                        <input type={"datetime-local"} className={style.dateInput} />
                                    </div>
                                    <div>
                                        <h3>*총 예상 거리</h3>
                                        <input type={"text"} placeholder="           km" />
                                    </div>
                                </div>
                                <div className={style.setMap}>
                                    <button type='button' onClick={toggleHandler}>출발지/도착지</button>
                                </div>
                            </div>
                        </div>
                        <div>
                            {openAddressInput}
                        </div>
                    </form>
                    <div>

                    </div>
                    <div className={style.text}></div>
                </article>
            </section>
        </main>
    );
}

export default WriteRallyPost;