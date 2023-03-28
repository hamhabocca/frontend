import SearchFilter from "../components/commons/SearchFilter";
import RallyList from "../components/lists/RallyList";
import style from "./RallyBoard.module.css";
// import { searchRally } from "../apis/RallyAPICalls";
import { getRallySearchResult } from "../apis/RallySearchAPICalls";

import { useEffect, useState } from 'react';
import { useLocation } from "react-router";
import Pagination from "react-js-pagination";
import styled from 'styled-components';
import { HiChevronDoubleLeft, HiChevronLeft, HiChevronRight, HiChevronDoubleRight } from "react-icons/hi2";


function RallySearchBoard() {

    const [page, setPage] = useState(1);

    const handlePageChange = (page) => { setPage(page) };

    const [searchResult, setSearchResult] = useState([]);

    const searchParams = useLocation();
    // console.log(searchParams)

    const uri = decodeURI(searchParams.search);

    const uriNew = uri.replace('?', '');

    // console.log(uriNew.split('&'));
    // console.log(uriNew.split('&')[0].slice((uriNew.split('&')[0].indexOf('=')+1)));

    useEffect(
        () => {
            // setSearchResult(getRallyList().slice(15 * (page - 1), 15 * (page - 1) + 15));
            // setSearchResult()
            getRallySearchResult(uriNew);
        }, 
    [page]
    );

    return (
        // <main className={style.container}>

        //     <SearchFilter />

        //     <section className={style.board}>

        //         <article className={style.title}>
        //             <h1>랠리 모집</h1>
        //         </article>

        //         <article className={style.category}>
        //             <select className={style.select}>
        //                 <option>전체</option>
        //                 <option>모집중</option>
        //                 <option>모집마감</option>
        //                 <option>취소됨</option>
        //                 <option>완주!</option>
        //             </select>
        //             <div>타입</div>
        //             <div>랠리명</div>
        //             <div>랠리일정</div>
        //             <div>지역</div>
        //             <div>작성일</div>
        //         </article>

        //         <article className={style.list}>
        //             <RallyList rallyPosts={rallyPostList} />
        //         </article>

        //         <PaginationBox>
        //             <Pagination
        //                 activePage={page}
        //                 itemsCountPerPage={15}
        //                 totalItemsCount={getRallyList().length}
        //                 pageRangeDisplayed={5}
        //                 firstPageText={<HiChevronDoubleLeft />}
        //                 prevPageText={<HiChevronLeft />}
        //                 nextPageText={<HiChevronRight />}
        //                 lastPageText={<HiChevronDoubleRight />}
        //                 onChange={handlePageChange}
        //             />
        //         </PaginationBox>

        //     </section>

        // </main>
        null
    );
}

export default RallySearchBoard;