import { useEffect, useState } from "react";
import { HiChevronDoubleLeft, HiChevronDoubleRight, HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import { Link } from 'react-router-dom';
import QnAList from "../components/lists/QnAList";
import style from "./QnABoard.module.css";
import { callQnaListAPI, callSearchQnaAPI } from "../apis/QnAAPICalls";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";

function QnABoard() {

    // 리덕스
    const dispatch = useDispatch();
    const qnas = useSelector(state => state.qnaReducer);
    const qnaList = qnas?.qnaList?.content;
    const pageInfo = qnas?.pageing;

    // 현재 페이지
    const [currentPage, setCurrentPage] = useState(1);
    
    // 총 페이지의 모음
    const pageNumber = [1];

    if(pageInfo){
        for(let i = pageInfo.startPage ; i <= pageInfo.endPage ; i++){
            pageNumber.push(i);
            }
        }

    // 페이지 변경될 때마다 리렌더링
    useEffect(() => {
    
        dispatch(callQnaListAPI({currentPage: currentPage}));
        
    }, [currentPage]);
    
    // 렌더링 성공적으로 될때만 리스트 조회 노출
    return (

        <main className={style.all}>

            <div className={style.search}>
                <select className={style.dropdownbox}>
                    <option>카테고리</option>
                </select>
                <form className={style.input}>
                    <input
                        className={style.searchfield}
                        type="text"
                        size="50"
                        name="search"
                        // value={searchValue}
                        // onChange={ e => setSearchValue(e.target.value) }    
                    />
                    {/* <input onClick={ onClickhandler } className={style.searchbtn} type="submit" value="검색" /> */}
                    <input className={style.searchbtn} type="submit" value="검색" />
                </form>
            </div>

            <div className={style.board}>
                <h1>건의 게시판</h1>
                <br />
                <hr />
                <div className={style.cg}>
                    <div className={style.d1}>
                        <select className={style.cgselect}>
                            <option>카테고리</option>
                        </select>

                        <h6 className={style.postname}>제목</h6>
                    </div>

                    <div className={style.d2}>
                        <h6 className={style.writer}>작성자</h6>

                        <h6 className={style.date}>작성일</h6>
                    </div>
                </div>

                <article className={style.list}>
                    <QnAList qnaPosts={qnas} />
                </article>
            </div>

            <article className={style.btn}>
                <Link to='/qna/write'><button>작성</button></Link>
            </article>

            <article className={style.pagination}>
            <button onClick={() => setCurrentPage(1)} disabled={currentPage === 1}>
                        <HiChevronDoubleLeft />
                    </button>
                    <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1} >
                        <HiChevronLeft />
                    </button>
                    {pageNumber.map((num) => (
                        <li key={num} onClick={() => setCurrentPage(num)}>
                            <button style={ currentPage == num? {color : '#003ACE'}: null}>
                                {num}
                            </button>
                        </li>
                    ))}
                    <button onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === pageInfo?.endPage || pageInfo?.endPage == 1}>
                        <HiChevronRight />
                    </button>
                    <button onClick={() => setCurrentPage(pageInfo?.endPage)} disabled={currentPage === pageInfo?.endPage || pageInfo?.endPage == 1}>
                        <HiChevronDoubleRight />
                    </button>
            </article>
            <br />
            <hr />

        </main>

    );
}

export default QnABoard;

