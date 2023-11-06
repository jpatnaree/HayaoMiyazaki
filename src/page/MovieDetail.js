import { useParams } from "react-router";
import NavBar from "../component/NavBar";

function MovieDetail({shows}) {
    const {id} = useParams()

    const show = shows.find(s => {
        return s.id === Number(id)
    })

    
    return (
        <>
        <NavBar />
    <div className="show-detail">
        <img src={show.image} alt={show.title} className="myshow-art" />
        <div className="details-container">
            <header>
                <h3>{show.title}</h3>                    
            </header>
            <p>{show.detail}</p>
            <br/>
            <a href={show.trailer_url}>Watch Trailer</a>
            <footer>
                <p>Released: {show.year_release}</p>
            </footer>
        </div>
    </div>
    </>
    )
}

export default MovieDetail;