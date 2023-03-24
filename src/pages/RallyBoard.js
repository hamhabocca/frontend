import SearchFilter from "../components/commons/SearchFilter";
import RallyList from "../components/lists/RallyList";
import style from "./RallyBoard.module.css";

function RallyBoard() {

  return (
    <main className={style.container}>

      <section className={style.filter}>
        <SearchFilter />
      </section>

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
          <RallyList />
        </article>

      </section>

    </main>
  );
}

export default RallyBoard;