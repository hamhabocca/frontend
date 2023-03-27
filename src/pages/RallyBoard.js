import SearchFilter from "../components/commons/SearchFilter";
import RallyList from "../components/lists/RallyList";
import style from "./RallyBoard.module.css";
import { getRallyList } from "../apis/RallyAPICalls";

import { useEffect, useState } from 'react';
import Pagination from "react-js-pagination";
import styled from 'styled-components';
import { HiChevronDoubleLeft, HiChevronLeft, HiChevronRight, HiChevronDoubleRight } from "react-icons/hi2";

function RallyBoard() {

    const [page, setPage] = useState(1);

    const handlePageChange = (page) => { setPage(page) };

    const [rallyPostList, setRallyPostList] = useState([]);

    useEffect(() => {
        setRallyPostList(getRallyList().slice(15 * (page - 1), 15 * (page - 1) + 15));
    }, [page]);

    return (
        <main className={style.container}>

            <SearchFilter />

            <section className={style.board}>

                <article className={style.title}>
                    <h1>랠리 모집</h1>
                </article>

                <article className={style.category}>
                    <select className={style.select}>
                        <option>전체</option>
                        <option>모집중</option>
                        <option>모집마감</option>
                        <option>취소됨</option>
                        <option>완주!</option>
                    </select>
                    <div>타입</div>
                    <div>랠리명</div>
                    <div>랠리일정</div>
                    <div>지역</div>
                    <div>작성일</div>
                </article>

                <article className={style.list}>
                    <RallyList rallyPosts={rallyPostList} />
                </article>

                <PaginationBox>
                    <Pagination
                        activePage={page}
                        itemsCountPerPage={15}
                        totalItemsCount={getRallyList().length}
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

const PaginationBox = styled.div`
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

export default RallyBoard;