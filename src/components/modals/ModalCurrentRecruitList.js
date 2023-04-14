import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from "../../modules/ModalsModule";
import MemberCardModal from '../items/MemberCardModal';
import style from './ModalCurrentRecruitList.module.css';


function CurrentRecruitListModal() {

    const dispatch = useDispatch();
    const isOpen = useSelector(state => state.modalsReducer.recruitmentListState);


    return (
        <Modal isOpen={isOpen} onRequestClose={() => dispatch(closeModal())} ariaHideApp={false} className={style.modal} style={{ overlay: { backgroundColor: 'rgba(0, 0, 0, 0.5)', zIndex: '98' } }}>
            <section>
                <div className={style.header}>
                    <h1>신청 현황</h1>
                </div>
                <div className={style.category}>
                    신청 승인 {'(인원수)'}
                </div>
                <div className={style.group}>
                    <div></div>
                    <p>닉네임</p>
                    <p>신청 시각</p>
                </div>
                <div>
                    <MemberCardModal />
                </div>
            </section>
        </Modal>
    );
}
export default CurrentRecruitListModal;