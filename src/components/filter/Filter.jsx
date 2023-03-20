/* library import */
import {useState, useEffect} from 'react'

/* data import */
import platform from '../data/PlatformData'
import genre from '../data/GenreData'
import sortBy from '../data/SortByData'

/* component import */
import FilterList from "./FilterList"

/* SCSS import */
import './Filter.scss'

const Filter = () => {
    const [platforms, setPlatforms] = useState([])
    const [genres, setGenres] = useState([])
    const [sortBys, setSortBys] = useState([])
    const [games, setGames] = useState([])

    useEffect(()=>{

    })

    return ( 
        <section className='filter'>
            <FilterList data={platform} name="Platform" platforms={platforms} setPlatforms={setPlatforms}/>
            <FilterList data={genre} name="Genre/Tag" genres={genres} setGenres={setGenres}/>
            <FilterList data={sortBy} name="Sort by" sortBys={sortBys} setSortBys={setSortBys}/>
        </section>
    );
}

export default Filter;