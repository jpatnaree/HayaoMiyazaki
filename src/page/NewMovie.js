

function NewMovie() {
    return (
        <div className="new-movie-form">
          <h2>Update New Movie</h2>
          <form>
            <input type="text" name="name" placeholder="Plant name" />
            <input type="text" name="image" placeholder="Image URL" />
            <input type="number" name="year_release" placeholder="Released Year" />
            <input type="text" name="detail" placeholder="Movie Info" />
            <input type="text" name="trailer_url" placeholder="Trailer URL" />
            <button type="submit">Add Plant</button>
          </form>
        </div>
      );
};

export default NewMovie;