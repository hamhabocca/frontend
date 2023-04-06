import { useDispatch, useSelector } from 'react-redux';
import Modal from 'react-modal';
import styles from './Profile.module.css';
import { closeModal } from "../../modules/ModalsModule";

function Profile() {

    const dispatch = useDispatch();
    const isOpen = useSelector(state => state.modalsReducer.profileState);

    // const onChangeHandler = (e) => {
    //     setSigList(searchSig(e.target.value));
    // }

    return (
        <Modal isOpen={isOpen} ariaHideApp={false} className={styles.modal} style={{ overlay: { backgroundColor: 'rgba(0, 0, 0, 0.5)', zIndex: '98' } }}>

            <div className={styles.all}>
                <div className={styles.header}>
                    <h3>프로필 수정</h3>
                </div>
                <div className={styles.info}>
                    <div className={styles.title}>
                        <h4 style={{height:'100px'}}>프로필사진</h4>
                        <h4 style={{height:'20px' }}>닉네임</h4>
                        <h4 style={{height:'10px' }}>선호지역</h4>
                        <h4 style={{height:'50px' }}>랠리타입</h4>
                    </div>
                    <div className={styles.info2}>
                        <div>
                            <div className={styles.img1}>
                                <button className={styles.img2}> </button>
                            </div>
                            <div className={styles.button1}>
                                <input type='button' className={styles.change1} value='변경' />
                                <input type='button' className={styles.delete} onClick={closeModal} value='삭제' />
                            </div>
                        </div>
                        <div className={styles.nickname}> 
                            <div className={styles.text1}>
                                <h6>닉네임 사용 결과 테스트</h6>
                            </div>
                            <div>
                                <input className={styles.textfield} type="text" size="20" name="search" />
                                <input className={styles.change2} type='button' value='변경' />
                            </div>
                        </div>
                        <div className={styles.local}>
                            <div>
                                <select className={styles.sido}>
                                    <option>시/도</option>
                                </select>
                            </div>
                            <div>
                                <select className={styles.gungu}>
                                    <option>시/군/구</option>
                                </select>
                            </div>
                        </div>
                            <div className={styles.rally1}>
                                <select className={styles.rally2}>
                                    <option>랠리타입</option>
                                </select>
                            </div>
                    </div>
                </div>
                <div className={styles.button2}>
                    <input type='button' className={styles.ok} value='확인' />
                    <input type='button' className={styles.close} onClick={() => dispatch(closeModal())} value='취소' />
                </div>
            </div>
        </Modal>

    );
}
export default Profile;