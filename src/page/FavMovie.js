// import { useParams } from "react-router";
import FavCard from "../component/FavCard";
import NavBar from "../component/NavBar";

function FavMovie({shows}) {
    
    const filterFav = shows.filter(show => {
        return show.favorite === true
    })

    const displayFav = filterFav.map(show => {
        return <FavCard key={show.id} show={show} />
    })

return (
    <>
    <NavBar/>
    <div className="show-container">
        {displayFav}
    </div>
    </>
)

}

export default FavMovie;

