
/* SCSS import */
import "./DropDownFilter.scss"

const DropDownFilter = () => {
    const platform =[
        {value: "all", label: "All Platforms"},
        {value: "pc", label: "All Platform"},
        {value: "all", label: "All Platform"},
    ]
    const genre =[
        {value: "mmorpg", label: "mmorpg"},
        {value: "shooter", label: "shooter"},
        {value: "strategy", label: "strategy"},
        {value: "moba", label: "moba"},
        {value: "racing", label: "racing"},
        {value: "sports", label: "sports"},
        {value: "social", label: "social"},
        {value: "sandbox", label: "sandbox"},
        {value: "open-world", label: "open-world"},
        {value: "sports", label: "sports"},
        {value: "social", label: "social"},
        {value: "survival", label: "survival"},
        {value: "pvp", label: "pvp"},
        {value: "pve", label: "pve"},
        {value: "pixel", label: "pixel"},
        {value: "voxel", label: "voxel"},
        {value: "pvp", label: "pvp"},
        {value: "zombie", label: "zombie"},
        {value: "turn-based", label: "turn-based"},
        {value: "first-person", label: "first-person"},
        {value: "third-Person", label: "third-Person"},
        {value: "top-down", label: "top-down"},
        {value: "tank", label: "tank"},
        {value: "space", label: "space"},
        {value: "sailing", label: "sailing"},
        {value: "side-scroller", label: "side-scroller"},
        {value: "superhero", label: "superhero"},
        {value: "permadeath", label: "permadeath"},
        {value: "card", label: "card"},
        {value: "battle-royale", label: "battle-royale"},
        {value: "mmo", label: "mmo"},
        {value: "mmofps", label: "mmofps"},
        {value: "mmotps", label: "mmotps"},
        {value: "3d", label: "3d"},
        {value: "2d", label: "2d"},
        {value: "anime", label: "anime"},
        {value: "fantasy", label: "fantasy"},
        {value: "sci-fi", label: "sci-fi"},
        {value: "fighting", label: "fighting"},
        {value: "mmofps", label: "mmofps"},
        {value: "mmotps", label: "mmotps"},
        {value: "action-rpg", label: "action-rpg"},
        {value: "action", label: "action"},
        {value: "military", label: "military"},
        {value: "martial-arts", label: "martial-arts"},
        {value: "flight", label: "flight"},
        {value: "low-spec", label: "low-spec"},
        {value: "tower-defense", label: "tower-defense"},
        {value: "horror", label: "horror"},
        {value: "mmorts", label: "mmorts"},
    ]
    const sortBy=[
    {value: "low-spec", label: "Relevance"},
    {value: "tower-defense", label: "Popularity"},
    {value: "horror", label: "Release Date"},
    {value: "mmorts", label: "Alphabetical"}
]

    return (
    <section className="dropDownFilter">
    </section>
    );
}

export default DropDownFilter;