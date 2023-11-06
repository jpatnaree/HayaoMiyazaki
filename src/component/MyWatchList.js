import React from 'react';
import MyShowCard from './MyShowCard';

function MyWatchList({myshow, deleteMyShow}) {

    const myshowDisplay = myshow.map(show => {
        return <MyShowCard key={show.id} show={show} deleteMyShow={deleteMyShow} />
    })

    return(
        <div className="watch-list-container">
            {myshowDisplay}
        </div>
    )
}

export default MyWatchList;