

function MovieIdDetail() {

    return (
        <li className="card">
        <img src={"https://via.placeholder.com/400"} alt={"plant name"} />
        <h4>{"name"}</h4>
        <p>Year Released: {"year"}</p>
        <p>{"Description"}</p>
        <video width="750" height="500" controls >
            <source src="..Videos/video1.mp4" type="video/mp4"/>
        </video>
        {true ? (
          <button className="favorite">Like</button>
        ) : (
          <button>unlike</button>
        )}
      </li>
    )
}

export default MovieIdDetail;