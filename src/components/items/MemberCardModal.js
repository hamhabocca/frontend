import style from './MemberCardModal.module.css';

function MemberCardModal({ member }) {

    return (
        <div className={style.member}>
            <div>
                <article>프사</article>
            </div>
            <p>{'신청자닉네이이이임'}</p>
            <p>{'2023.03.08 AM 09.00'}</p>
        </div>
    );
};

export default MemberCardModal;