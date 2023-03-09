/* SCSS import */
import "./DropDownFilter.scss"

const DropDownFilter = () => {
    function dropDown(){
        document.getElementById(dropDownPlatform).classList.toggle("show");
    }
    return ( 
        <select className="dropDownFilter" id="platform" name="platform">
            <label for="platform">Platform</label>
            <button onClick={dropDown}></button>
                <option value="all">All Plattforms</option>
                <option value="pc">Windows (PC)</option>
                <option value="browser">Browser (Web)</option>
        </select>
    );
}

export default DropDownFilter;