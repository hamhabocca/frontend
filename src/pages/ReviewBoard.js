import ReviewSearchFilter from "../components/commons/ReviewSearchFilter";
import ReviewList from "../components/lists/ReviewList";
import style from "./ReviewBoard.module.css";
import { useEffect, useState } from "react";
import Pagination from "react-js-pagination";
import styled from "styled-components";
import { HiChevronDoubleLeft, HiChevronLeft, HiChevronRight, HiChevronDoubleRight } from "react-icons/hi2";

import { callReviewListAPI } from "../apis/ReviewAPICalls";
import { useDispatch, useSelector } from "react-redux";


function ReviewBoard() {

    const dispatch = useDispatch();
    const test = useSelector(state => state.reviewReducer);

    const reviews = test.reviews;

    const [page, setPage] = useState(1);

    const handlePageChange = (page) => { setPage(page) };

    const [reviewPostList, setReviewPostList] = useState([]);

    useEffect(() => {

        console.log("리뷰게시판");
        dispatch(callReviewListAPI({ currentPage: 1 }));

        // setReviewPostList(getReviewList().slice(15 * (page - 1), 15 * (page - 1) + 15));
    }, [page]);

    return (
        <main className={style.container}>

            <ReviewSearchFilter />

            <section className={style.board}>
                <article className={style.title}>
                    <h1>랠리 후기</h1>
                </article>

                <article className={style.category}>
                    <select className={style.select}>
                        <option>전체</option>
                        <option>랠리장</option>
                        <option>랠리원</option>
                    </select>
                    <div>타입</div>
                    <div>랠리명</div>
                    <div>작성자</div>
                    <div>작성일</div>
                </article>

                <article className={style.list}>
                    <ReviewList reviews={reviews} />
                </article>

                <PaginationBox>
                    <Pagination
                        activePage={page}
                        itemsCountPerPage={15}
                        //totalItemsCount={getReviewList().length}
                        pageRangeDisplayed={5}
                        firstPageText={<HiChevronDoubleLeft />}
                        prevPageText={<HiChevronLeft />}
                        nextPageText={<HiChevronRight />}
                        lastPageText={<HiChevronDoubleRight />}
                        onChange={handlePageChange}
                    />
                </PaginationBox>

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