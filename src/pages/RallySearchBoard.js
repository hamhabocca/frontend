import SearchFilter from "../components/commons/SearchFilter";
import RallyList from "../components/lists/RallyList";
import style from "./RallyBoard.module.css";
import { searchRally } from "../apis/RallyAPICalls";

import { useEffect, useState } from 'react';
import { useLocation } from "react-router";
import Pagination from "react-js-pagination";
import styled from 'styled-components';
import { HiChevronDoubleLeft, HiChevronLeft, HiChevronRight, HiChevronDoubleRight } from "react-icons/hi2";


function RallySearchBoard() {

    const [page, setPage] = useState(1);

    const handlePageChange = (page) => { setPage(page) };

    const [rallyPostList, setRallyPostList] = useState([]);

    const searchParams = useLocation();
    console.log(searchParams)

    const uri = decodeURI(searchParams.search);
    console.log(uri);

    console.log(uri.split('&')[0]);
    console.log(uri.split('&')[0].slice((uri.split('&')[0].indexOf('=')+1)));

    // useEffect(() => {
    //     setRallyPostList(getRallyList().slice(15 * (page - 1), 15 * (page - 1) + 15));
    // }, [page]);

    return null;
}

export default RallySearchBoard;