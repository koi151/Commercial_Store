import { FaSearch } from "react-icons/fa";
import { memo } from 'react';
import { useDispatch } from 'react-redux';
import { setSearchTerm } from "../../../../../features/search/searchSlice";
import './searchBar.scss'

function SearchBar() {
  console.log('Search Bar rendered');
  const dispatch = useDispatch();

  const handleSearch = () => {
    let curSearchTerm = document.querySelector('.input-search').value;
    if (curSearchTerm !== '')
    {
      console.log('curSearchTerm check:', curSearchTerm);
      dispatch(setSearchTerm(curSearchTerm));
    }
  }

  const isEnterKeyPress = (e) => {
    if (e.key === 'Enter')
    {
      console.log('Keyword requested:', document.querySelector('.input-search').value);
      handleSearch();
    }
  }

  return (
    <>
      <div className="search-bar">
        <button className="search-bar__btn" onClick={handleSearch}>
          <FaSearch className="fas fa-search"/>
        </button>
        <input type="text" className="input-search" placeholder="Search products..."
              //  onChange={(e) => dispatch(setSearchTerm(e.target.value))}
               onKeyDown={(e) => isEnterKeyPress(e)}/>
      </div>
    </>
  )
}

export default memo(SearchBar);