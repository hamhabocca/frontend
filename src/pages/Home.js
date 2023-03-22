import HomeSearchFilter from '../components/commons/HomeSearchFilter';
import style from './Home.module.css';

function Home() {

    return (
        <>
            <header>
                <img src='Dalibocca_logo.png' alt='main logo' className={style.Logo} />
                <HomeSearchFilter className={style.HomeSearchFilter}/>
            </header>
            <main>
            </main>
        </>
    )
}

export default Home;