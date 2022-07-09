import React from "react";
function Search(props) {
    function search(e){
        props.onSearch(e)
    }
    return (
        <div className="searchDiv">
            <input className="searchInput" onChange={search} placeholder="Seach Product Here"></input>
        </div>
    );
}

export default Search;