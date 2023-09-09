import styles from './style.module.scss';

export const Textarea = ({label1, label2, id, placeholder, functionChange, value, maxL}) => {
    return(
        <div className={styles.textareaContainer}>
            <label className='paragraph purple' htmlFor={id}><p>{label1}</p>{label2}</label>
            <textarea onChange={ functionChange } placeholder={placeholder} name={id} id={id} value={value} maxLength={maxL}></textarea>
        </div>
    )
}