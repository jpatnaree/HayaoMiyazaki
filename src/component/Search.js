

function Search({setSearchBar}) {
    return (
        <div className="searchbar">
          <label htmlFor="search">Search Movie:</label>
          <input
            type="text"
            id="search"
            placeholder="Type a title to search..."
            onChange={(e)=> setSearchBar(e.target.value)}
          />
        </div>
      );
}

export default Search;