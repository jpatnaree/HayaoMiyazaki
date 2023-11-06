import React from 'react';

function MyShowCard({show, deleteMyShow}) {


    const {title, image, id, year_release} = show


    return(
        <div className="show-card">
            <img src={image} alt={title} className="show-art"/>
            <div className="details-container">
                <header>
                    <h3>{title}: {year_release}</h3>                 
                </header>
                <footer>
                    <button key={id} onClick={()=> deleteMyShow(id) }>Remove</button>
                </footer>
            </div>
        </div>
    );
}

export default MyShowCard;