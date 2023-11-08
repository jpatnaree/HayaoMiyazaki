import React, {useState} from 'react';
import {  Link } from "react-router-dom"

function ShowCard({show, updateMyShow, deleteBoth, setShows, shows}) {
    // the next time this renders, toggle will become true
    const {title, detail, image, id, year_release, trailer_url } = show
    const [toggle, setToggle] = useState(show.favorite)


    function toggleButton(show) {
        // toggle is false
        // setToggle(!toggle); // set toggle to true
        // toggle is still false
        console.log(show.id)
        fetch(`http://localhost:1993/movie/${show.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                favorite: !toggle // set favorite to false
            })
        })
        .then (res=>res.json())
        .then( data=> setShows(shows, data))
        // toggle is still false
        setToggle(!toggle);
    }

    const setButton = toggle?<button onClick={()=>{
                toggleButton(show)}}><img className='likebutton' src="https://i.imgur.com/blrZOhR.png" alt="fav"/></button> : 
        <button onClick={()=>{
                        toggleButton(show)}}><img className='likebutton' src="https://i.imgur.com/3hjEouE.png" alt="unfav"/></button>;
    
    
    return(
        <div className="show-card">
            <img src={image} alt={title} className="show-art" onClick={()=>{
        updateMyShow(show)}}/>
            <div className="details-container">
                <header>
                    <h3>{title}</h3>                    
                </header>
                <p>{detail}</p>
                <br/>
                <p>Released: {year_release}</p>
                <a href={trailer_url}>Watch Trailer</a>
                <footer>
                <Link to={`/movies/${show.id}`}>See Detail</Link>
                    {setButton}
                    <button key={id} onClick={() => deleteBoth(id)}>Delete</button>
                </footer>
            </div>
        </div>
    );
}

export default ShowCard;