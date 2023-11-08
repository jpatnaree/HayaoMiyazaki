import React from 'react';

function MyShowCard({show, deleteMyShow}) {


    const {title, image, id, year_release} = show


    return(
        <div className="myshow-card">
            <img src={image} alt={title} className="myshow-art" onClick={()=> deleteMyShow(id) }/>
            <div className="details-container">
                <header>
                    <h3>{title}: {year_release}</h3>                 
                </header>
            </div>
        </div>
    );
}

export default MyShowCard;