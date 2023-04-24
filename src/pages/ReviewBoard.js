import ReviewSearchFilter from "../components/commons/ReviewSearchFilter";
import ReviewList from "../components/lists/ReviewList";
import style from "./ReviewBoard.module.css";
import { useEffect, useState } from "react";
import Pagination from "react-js-pagination";
import styled from "styled-components";
import { HiChevronDoubleLeft, HiChevronLeft, HiChevronRight, HiChevronDoubleRight } from "react-icons/hi2";

import { callReviewRallyListAPI } from "../apis/RallyReviewAPICalls";
import { useDispatch, useSelector } from "react-redux";
import { checkLoginStatusAPICalls } from "../apis/CheckLoginStatusAPICalls";
import { Navigate } from "react-router-dom";

function ReviewBoard() {

    
    //리덕스
    const dispatch = useDispatch();
    const reviewList = useSelector(state => state.reviewReducer);
    const [currentPage, setCurrentPage] = useState(1);
    const pageInfo = reviewList?.paging;
    
    const pageNumber = [1];
    
    if (pageInfo) {
        for (let i = pageInfo.startPage + 1; i <= pageInfo.endPage; i++) {
            pageNumber.push(i);
        }
    }
    
    
    useEffect(() => {
        dispatch(callReviewRallyListAPI({ currentPage: currentPage }));
        
    }, [currentPage]);
    
    if(checkLoginStatusAPICalls()) {

        alert("로그인 후 이용해주시길 바랍니다.");

        return <Navigate replace to={"/login"}/>
    }
    
    return (
        <main className={style.container}>

            <ReviewSearchFilter />

            <section className={style.board}>
                <article className={style.title}>
                    <h1>랠리 후기</h1>
                </article>
                <article className={style.category}>
                    <div>랠리 타입</div>
                    <div>랠리명</div>
                    <div>리뷰명</div>
                    <div>작성자</div>
                    <div>작성일</div>
                </article>

                <article className={style.list}>
                    {Array.isArray(reviewList) && <ReviewList reviewList={reviewList} />}
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
                            <button style={currentPage == num ? { color: '#003ACE' } : null}>
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
            </section>
        </main>
    );
}

const PaginationBox = styled.div
    `
  .pagination { display: flex; justify-content: center; margin-top: 15px;}
  ul { list-style: none; padding: 0; }
  ul.pagination li {
    display: inline-block;
    width: 30px;
    height: 20px;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem; 
  }
  ul.pagination li a { text-decoration: none; color: #A5A5A5; font-size: 12pt; }
  ul.pagination li.active a { color: #202020; }
  ul.pagination li a:hover,
  ul.pagination li a.active { color: #202020; }
`

export default ReviewBoard;