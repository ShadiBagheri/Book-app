import { useState } from "react";
//Icons
import { FiSearch } from "react-icons/fi";

const Search = ({search, setSearch}) => {

    return(
        <div>
            <input type="text" placeholder="Search Books..."
                   value={search}
                   onChange={(e) =>
                       setSearch(e.target.value)}
            />
            <button>
                <FiSearch/>
            </button>
        </div>
    )
}

export default Search