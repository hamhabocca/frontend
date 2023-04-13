import styles from './ModalSecession.module.css';
import { useDispatch, useSelector } from 'react-redux';
import Modal from 'react-modal';
import { closeModal } from '../../modules/ModalsModule';

function RallyRecruitmentCancleOk() {

    const dispatch = useDispatch();
    const isOpen = useSelector(state => state.modalsReducer.cancelRecruitState2Ok);

    return (
        <Modal isOpen = {isOpen} onRequestClose={() => dispatch(closeModal())}ariaHideApp={false} className ={styles.modal}style = {{overlay : {backgroundColor: 'rgba(0, 0, 0, 0.5)', zIndex: '98'}}}>
            <div className={styles.all}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h3>랠리모집취소</h3>
                </div>
                <div className={styles.info}>
                    <h3 style={{fontSize : '20px'}}>랠리팀명</h3>
                    <br/><br/>
                    <h4 className={styles.text}>랠리 모집이 취소되었습니다. </h4>
                    <div>
                    <input type='button' className={styles.close} onClick = {() => dispatch(closeModal())} value='닫기'/>
                    </div>
                </div>
            </div>
        </div>
        </Modal>
    );
}
export default RallyRecruitmentCancleOk;