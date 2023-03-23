import HomeMenubar from '../components/commons/HomeMenubar';
import HomeSearchFilter from '../components/commons/HomeSearchFilter';
import Footer from '../components/commons/Footer';
import style from './Home.module.css';

function Home() {

    return (
        <>
            <header className={style.Header}>
                <img src='Dalibocca_logo.png' alt='main logo' className={style.Logo} />
                <label className={style.ThatText}>간단하고 편하게 랠리를 검색해보세요!</label>
                <HomeSearchFilter/>
            </header>
            <HomeMenubar/>
            <main>
                <label className={style.Notice}>공지사항일듯</label>
                <div className={style.NewestRallyAndMore}>
                    <h4>&gt; 최신 랠리 모집</h4>
                    <button>더보기&nbsp;&nbsp; &gt;</button>
                </div>
            </main>
            {/* <Footer/> */}
        </>
    )
}

export default Home;