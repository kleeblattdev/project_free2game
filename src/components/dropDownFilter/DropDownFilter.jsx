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


    
    return (
    <section className="dropDownFilter">
        <div id="platform">
            {platform.map((platform)=>{
                return <DropDownItem
                key = {uuidv4()}
                label = {platform.label}
                value = {platform.value}
                />
            })}
        </div>
        <div id="genre">
            {genre.map((genre)=>{
                return <DropDownItem
                key = {uuidv4()}
                label = {genre.label}
                value = {genre.value}
                />
            })}
        </div>
        <div id="sortBy">
            {sortBy.map((sortBy)=>{
                return <DropDownItem
                key = {uuidv4()}
                label = {sortBy.label}
                value = {sortBy.value}
                />
            })}
        </div>
    </section>
    );
}

export default DropDownFilter;