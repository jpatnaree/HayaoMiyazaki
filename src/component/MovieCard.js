

function MovieCard() {

    return (
        <li className="card">
        <img src={"https://via.placeholder.com/400"} alt={"plant name"} />
        <h4>{"name"}</h4>
        <p>Year Released: {"year"}</p>
        <p>{"Description"}</p>
        {true ? (
          <button className="favorite">Like</button>
        ) : (
          <button>unlike</button>
        )}
      </li>
    )
}

export default MovieCard;