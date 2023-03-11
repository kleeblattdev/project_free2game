/* SCSS import */
import "./DropDownItem.scss"

const DropDownItem = ({value, label}) => {
    return ( 
        <option value={value}>{label}</option>
    );
}

export default DropDownItem;