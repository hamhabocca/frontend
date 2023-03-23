import style from "./Footer.module.css"

function Footer() {

    return (
        <footer className={ style.container }>
                <div className={ style.logo }>
                    <img src="./img/footer_logo.png"></img>
                </div>
                <div className={ style.contents }>
                    <div className={ style.href }>
                        <ul>
                            <li><a href='https://www.google.com' target='_black'>약관</a></li>
                            <li><a href='https://www.google.com' target='_black'>개인정보</a></li>
                            <li><a href='https://www.google.com' target='_black'>사이트맵</a></li>
                        </ul>
                    </div>
                    <div className={ style.info }>
                            <span>사업자등록번호: 201-81-00000</span>
                            <span>주식회사 함해보까 대표이사 : 함보까</span>
                            <span>Emil:0000@gmail.com</span>
                            <span>개인정보 책임자 : 함보까</span><br />
                    </div>
                    <div className={ style.date }>
                        Copyright 2023. team-greedy. all rights reserved.
                    </div>
                </div>
        </footer>
    );
}

export default Footer;