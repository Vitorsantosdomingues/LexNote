import styles from './style.module.scss';

/*
    maxL = max length
    minL = min length

*/

export const Input = ({label1, label2, id, type, placeholder, value, functionChange, maxL, minL}) => {
    return(
 
        <div className={styles.inputContainer}>
            <label className='paragraph purple' htmlFor={id}><p className='paragraph'>{label1}</p>{label2}</label>
            <input className='paragraph' onChange={ functionChange } placeholder={placeholder} type={type} value={value} name={id} id={id} maxLength={maxL} minLength={minL}/>
        </div>
  
    )
}