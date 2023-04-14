import QnAList from "../components/lists/QnAList";
import style from "./QnABoard.module.css"
import { getQnAList, searchQnA } from "../apis/QnAAPICalls";
import Pagination from "react-js-pagination";
import styled from 'styled-components';
import { HiChevronDoubleLeft, HiChevronLeft, HiChevronRight, HiChevronDoubleRight } from "react-icons/hi2";
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useSearchParams } from "react-router-dom";
import { useLocation, useNavigate } from "react-router";

function QnASearchBoard() {

    const [page, setPage] = useState(1);
    const [qnaPostList, setQnAPostList] = useState([]);
    const [searchValue, setSearchValue] = useState('');

    const [searchParams] = useSearchParams();

    const [qnaList, setQnAList] = useState([]);


    const navigate = useNavigate();

    const url = useLocation();

    console.log(url);

    console.log(decodeURI(url.search));

    const newurl = decodeURI(url.search)

    console.log(newurl.split('=')[1]);

    // const qnatitle = searchParams.get('qnatitle');
    const qnatitle = newurl.split('=')[1];

    decodeURI(url);

    // useEffect(
    //     () => {
    //         setQnAList(searchQnA(qnatitle));
    //     },
    //     [qnatitle]
    // );

    console.log(qnatitle);

    useEffect(() => {
        setQnAPostList(searchQnA(qnatitle).slice(10 * (page - 1), 10 * (page - 1) + 10));
    }, [qnatitle]);

    const handlePageChange = (page) => { setPage(page) };

    const onClickhandler = () => {
        navigate(`/qna/search?qnaName=${searchValue}`);
    }

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
                        value={searchValue}
                        onChange={e => setSearchValue(e.target.value)}
                    />
                    <input onClick={onClickhandler} className={style.searchbtn} type="submit" value="검색" />
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
                    <QnAList qnaPosts={qnaPostList} />
                </article>

            </div>

            <article className={style.btn}>
                <Link to='/qna/write'><button>작성</button></Link>
            </article>

            <div className={style.pageNumber}>
                <PaginationBox>
                    <Pagination
                        activePage={page}
                        itemsCountPerPage={10}
                        totalItemsCount={getQnAList().length}
                        pageRangeDisplayed={5}
                        firstPageText={<HiChevronDoubleLeft />}
                        prevPageText={<HiChevronLeft />}
                        nextPageText={<HiChevronRight />}
                        lastPageText={<HiChevronDoubleRight />}
                        onChange={handlePageChange}
                    />
                </PaginationBox>

            </div>
            <br />
            <hr />

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

export default QnASearchBoard;

