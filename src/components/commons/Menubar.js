import MenuStyle from './Menubar.module.css';


function Menubar() {

    return(
        <div className={MenuStyle.wrap}>
            <div className = {MenuStyle.container}>
                <div className={MenuStyle.logo}>
                    <img src = "./img/Logo.png"></img>
                </div>
                <div className={MenuStyle.subcontent}>
                    <li>랠리모집</li>
                </div>
                <div className={MenuStyle.subcontent}>
                <li>랠리후기</li>
                </div>
                <div className={MenuStyle.subcontent}>
                <li>공지</li>
                </div>
                <div className={MenuStyle.subcontent}> 
                <li>건의</li>
                </div>
                <div className={MenuStyle.subcontent}> 
                <li>마이페이지</li>
                </div>
            </div>
        </div>

    );
}

export default Menubar;