import SearchFilter from "../components/commons/SearchFilter";
import RallyList from "../components/lists/RallyList";
import style from "./RallyBoard.module.css";

function RallyBoard() {

  return (
    <main className={ style.container }>

      <section className={ style.filter }>
        <SearchFilter />
      </section>

      <section className={ style.board }>
        
        <article className={ style.title }>
          <h1>랠리 모집</h1>
        </article>

        <article className={ style.list }>
          <RallyList />
        </article>

      </section>

    </main>
  );
}

export default RallyBoard;