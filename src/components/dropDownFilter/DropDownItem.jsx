/* library import */
import {useState} from "react"

/* component import */

/* SCSS import */
import "./DropDownItem.scss"

const DropDownItem = ({value, label}) => {
    const [userFilter, setUserFilter] = useState({
        platform:[],
        genre:[],
        sortBy:[],
        response:[],
    })

/*     let array = []
    console.log(array) */


    const handleChange = (event) =>{
        const {value, checked} = event.target
        const {platform, genre, sortBy} = userFilter

        console.log(`${value} is ${checked}`)

        if (checked) {
            setUserFilter({
                platform:[...platform, value],
                genre:[...genre, value],
                sortBy: [...sortBy,value],
                response: [...platform,value]
            })}

        else{
            setUserFilter({
                platform: platform.filter((event)=> event !== value),
                genre: genre.filter((event)=> event !== value),
                sortBy: sortBy.filter((event)=> event !== value),
                response: platform.filter((event)=> event !== value) && genre.filter((event)=> event !== value) && sortBy.filter((event)=> event !== value),
            })
        }
        
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