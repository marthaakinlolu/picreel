import React from "react";
import SearchIcon from '@mui/icons-material/Search';

export default function SearchBar({placeholder, setSearch}) {
    const handleFilter =  (event) =>{
         const searchWord = event.target.value;
         setSearch(searchWord);
    }
      
      return (
        // <div className="searchBar">
        //   <input type="text" placeholder={placeholder} onChange={handleFilter}/>
        // </div>
        <div className="searchBar">
          <SearchIcon className="search-icon"/>
          <input className="search" placeholder={placeholder} type="text" onChange={handleFilter}/>
      </div>  
      )
}