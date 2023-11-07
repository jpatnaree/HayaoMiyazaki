import React, { useState } from 'react';
import MyWatchList from '../component/MyWatchList'
import ShowList from '../component/ShowList'
import Search from '../component/Search';
import NavBar from '../component/NavBar';
import Dropdown from '../component/Dropdown';

function MovieCatalog({shows, setShows, myshow, setMyshow, updateMyShow, noSort}) {

    const [searchBar, setSearchBar] = useState('');
    
    function deleteMyShow(id) {
        setMyshow(myshow.filter(show => {
            return show.id !== id
        }))
    };

    function deleteBoth(id) {
        setShows(shows.filter((show) => {
            return show.id !== id

        }))
        fetch(`http://localhost:1993/movie/${id}`, {
            method: "DELETE"

        })
        deleteMyShow(id)
    };

// sorting

  function toSetDropDown(e) {
    if(e.target.value === "none") {
        setShows(noSort);
    } else if (e.target.value === "byname") {
        const sortName = [...shows].sort((a,b) => a.title.toUpperCase() > b.title.toUpperCase() ? 1:-1)
        setShows(sortName)
    } else if (e.target.value === "byyear") {
        const sortYear = [...shows].sort((a,b) => a.year_release > b.year_release ? 1:-1 )
        setShows(sortYear)
    }
  }

    
const filteredSearch = shows.filter(show => {
    return show.title.toUpperCase().includes(searchBar.toUpperCase()) || (show.year_release + "").toUpperCase().includes(searchBar.toUpperCase())
});

    return(
        <>
            <NavBar />
            <MyWatchList myshow={myshow} deleteMyShow={deleteMyShow} />
            <hr/>
            <Search setSearchBar={setSearchBar} />
            <Dropdown toSetDropDown={toSetDropDown} />
            <ShowList shows={filteredSearch} updateMyShow={updateMyShow} deleteBoth={deleteBoth} setShows={setShows}/>
            
        </>
    );
}

export default MovieCatalog;