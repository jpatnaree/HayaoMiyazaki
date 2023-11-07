import React from 'react';
import ShowCard from './ShowCard';

function ShowList({shows, updateMyShow, deleteBoth, setShows}) {

    const showDisplay = shows.map(show => {
        return <ShowCard key={show.id} show={show} updateMyShow={updateMyShow} deleteBoth={deleteBoth} setShows={setShows}/>
    })
    
    return(
        <div className="show-container">
            {showDisplay}
        </div>
    );
}

export default ShowList;