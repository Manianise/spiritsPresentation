/**
 * 
 * @param props will build a simple input with label

 */

export default function Input({...props}) {



    return <>
    <label className={props.labelClassName = 'form-label'} htmlFor={props.htmlFor}>{props.labelTitle}</label>
    <input type={props.type} id={props.id} className={props.className = 'form-control'} placeholder={props.placeholder} name={props.name} value={props.value} onChange={(e) => props.onChange(e.target.value)} />
    </>
}