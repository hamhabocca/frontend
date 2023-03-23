import style from './Home.module.css';

function Home() {

    return (
        <>
            <main>
                <label className={style.Notice}>공지사항일듯</label>
                <div className={style.NewestRallyAndMore}>
                    <h4>&gt; 최신 랠리 모집</h4>
                    <button>더보기&nbsp;&nbsp; &gt;</button>
                </div>
            </main>
        </>
    )
}

export default Home;