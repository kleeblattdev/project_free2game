/* library import */
import {useState} from "react"
import { v4 as uuidv4 } from 'uuid'

/* component import */
import DropDownItem from './DropDownItem'

/* SCSS import */
import "./DropDownFilter.scss"

const DropDownFilter = (props) => {
    const [showMenu, setShowMenu] = useState(false)
    
    return (
    <div className="dropDownFilter">
        <div className="dropDownTitle" onClick={()=>setShowMenu(prev => !prev)}>{props.title}</div>
        {showMenu && props.data.map((item)=>{
            return <DropDownItem
            key = {uuidv4()}
            label= {item.label}
            value={item.value}
            setState={item.setState}
            state ={item.state}
            />
        })}
    </div>
    );
}

export default DropDownFilter;