/*
    maxL = max length
    minL = min length

*/

export const Input = ({label1, label2, id, type, placeholder, value, functionChange, maxL, minL}) => {
    return(
 
        <div>
            <label htmlFor={id}><p>{label1}</p>{label2}</label>
            <input onChange={ functionChange } placeholder={placeholder} type={type} value={value} name={id} id={id} maxLength={maxL} minLength={minL}/>
        </div>
  
    )
}