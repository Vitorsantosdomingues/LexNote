export const Textarea = ({label1, label2, id, placeholder, functionChange, value, maxL}) => {
    return(
        <div>
            <label htmlFor={id}><p>{label1}</p>{label2}</label>
            <textarea onChange={ functionChange } placeholder={placeholder} name={id} id={id} value={value} maxLength={maxL}></textarea>
        </div>
    )
}