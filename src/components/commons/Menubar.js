import MenuStyle from './Menubar.module.css';


function Menubar() {

    return(
        <div className={MenuStyle.wrap}>
            <div className = {MenuStyle.container}>
                <div className={MenuStyle.logo}>
                    <img src = "./img/Logo.png"></img>
                </div>
                <div className={MenuStyle.subcontent}>
                    <li style={{fontSize: 'x-large', fontWeight:"bold", width : '150px',  height: '100px', backgroundColor : '#056DFA', color : 'white', border : "none"}}>랠리모집</li>
                </div>
                <div className={MenuStyle.subcontent}>
                <li style={{fontSize: 'x-large', fontWeight:"bold", width : '150px', height: '100px', backgroundColor : '#056DFA', color : 'white', border : "none"}}>랠리후기</li>
                </div>
                <div className={MenuStyle.subcontent}>
                <li style={{fontSize: 'x-large', fontWeight:"bold",  height: '100px', width : '150px', backgroundColor : '#056DFA', color : 'white', border : "none"}}>공지</li>
                </div>
                <div className={MenuStyle.subcontent}> 
                <li style={{fontSize: 'x-large', fontWeight:"bold",  height: '100px',width : '150px', backgroundColor : '#056DFA', color : 'white', border : "none"}}>건의</li>
                </div>
                <div className={MenuStyle.subcontent}> 
                <li style={{fontSize: 'x-large', fontWeight:"bold",  height: '100px', width : '150px', backgroundColor : '#056DFA', color : 'white', border : "none"}}>마이페이지</li>
                </div>
            </div>
        </div>

    );
}

export default Menubar;