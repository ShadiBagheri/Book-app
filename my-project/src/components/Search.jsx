//Icons
import { FiSearch } from "react-icons/fi";

const Search = ({ search, setSearch, searchHandler }) => {
    return(
        <div className="container flex">
            <input className="p-2 border-none outline-none rounded-md bg-white text-black me-3"
                   type="text"
                   placeholder="Search Books..."
                   value={search}
                   onChange={(e) =>
                       setSearch(e.target.value.toLowerCase())}
            />
            <button className="p-3 rounded-md bg-white hover:bg-gray-300" onClick={searchHandler}>
                <FiSearch className="text-black"/>
            </button>
        </div>
    )
}

export default Search