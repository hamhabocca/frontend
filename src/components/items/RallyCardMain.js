import style from './RallyCardMain.module.css';

function RallCardMain({item}) {

    console.log(item.rallyname)

    return (
        <div className={style.Container}>
            {item.rallyname}
        </div>
    )
}

export default RallCardMain;