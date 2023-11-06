import React, { useState } from 'react';
import MyWatchList from '../component/MyWatchList'
import ShowList from '../component/ShowList'
import Search from '../component/Search';
import NavBar from '../component/NavBar';

function MovieCatalog({shows, setShows, myshow, setMyshow, updateMyShow}) {

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
        deleteMyShow(id)
    };

    
    const filteredSearch = shows.filter(show => {
        return show.title.toUpperCase().includes(searchBar.toUpperCase())
    });

    return(
        <>
            <NavBar />
            <MyWatchList myshow={myshow} deleteMyShow={deleteMyShow} />
            <hr/>
            <Search setSearchBar={setSearchBar} />
            {/* <NewMovie shows={shows} setShows={setShows} /> */}
            <ShowList shows={filteredSearch} updateMyShow={updateMyShow} deleteBoth={deleteBoth} setShows={setShows}/>
            
        </>
    );
}

export default MovieCatalog;