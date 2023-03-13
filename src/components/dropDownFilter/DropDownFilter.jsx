/* library import */
import {useState} from "react"
import { v4 as uuidv4 } from 'uuid'
import Select from 'react-select'

//data import
import platform from "../data/PlatformData"
import genre from "../data/GenreData"
import sortBy from "../data/SortByData"

/* component import */
import DropDownItem from './DropDownItem'

/* SCSS import */
import "./DropDownFilter.scss"

const DropDownFilter = () => {
    const [getPlatform, setGetPlatform]=useState("")
    const [getGenre, setGetGenre]=useState("")
    const [getSortBy, setGetSortBy]=useState("")

    function handlePlatform(){
        setGetPlatform(platform.value)
    }

    function handleGenre(event){
        setGetGenre(event.target.value)
    }

    function handleSortBy(event){
        setGetSortBy(event.target.value)
    }

    console.log(getPlatform, getGenre, getSortBy)
    
    return (
    <section className="dropDownFilter">
        <label htmlFor="platform">
            <select name="platform" id="platform" multiple={true} onChange={handlePlatform}>
                {platform.map((platform)=>{
                    return (<DropDownItem
                    key={uuidv4()}
                    value={platform.value}
                    label={platform.label}
                    />
                    )
                })}
            </select>
        </label>
        <label htmlFor="genre">
            <select name="genre" id="genre" multiple={true} onChange={handleGenre}>
                {genre.map((genre)=>{
                    return (<DropDownItem
                        key={uuidv4()}
                        value={genre.value}
                        label={genre.label}
                        />)
                })}
            </select>
        </label>
        <label htmlFor="sortBy">
            <select name="sortBy" id="sortBy" multiple={true} onChange={handleSortBy}>
                {sortBy.map((sortBy)=>{
                    return (<DropDownItem
                        key={uuidv4()}
                        value={sortBy.value}
                        label={sortBy.label}
                        />)
                })}
            </select>
        </label>
        <label htmlFor="test">
            <Select
            coloseMenuOnSelect={false} 
            options={platform}
            isMulti
            onChange={handlePlatform}/>
        </label>
    </section>
    );
}

export default DropDownFilter;