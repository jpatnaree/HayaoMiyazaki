

function FavCard({show}) {
    
    const {image, title, trailer_url, year_release, detail } = show

    return (
        <>
    <div className="show-detail">
        <img src={image} alt={title} className="show-art" />
        <div className="details-container">
            <header>
                <h3>{title}</h3>                    
            </header>
            <p>{detail}</p>
            <br/>
            <a href={trailer_url}>Watch Trailer</a>
            <footer>
                <p>Released: {year_release}</p>
            </footer>
        </div>
    </div>
    </>
    )
}

export default FavCard;