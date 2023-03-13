/* library import */
import {useState} from "react"

/* component import */

/* SCSS import */
import "./DropDownItem.scss"

const DropDownItem = ({value, label, setState, state, props}) => {
    /* console.log(state) */
    /* console.log(setState) */
   /*  console.log(data) */
    const handleChange = (event) =>{
        console.log(event.target.value)
        const value = event.target.value
        props.setState(prev => { return [...prev, {value: value}]})
}
    return ( 
        <>
        <label htmlFor={label}className="DropDownItem">{label}
            <input type="checkbox" name={label} value={value} onChange={handleChange}/>
            <span className="checkmark"></span>
        </label>
        </>
    );
}

export default DropDownItem;