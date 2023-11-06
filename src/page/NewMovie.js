import { useState } from "react";
import {useNavigate} from "react-router-dom"
import NavBar from "../component/NavBar";

function NewMovie({shows, setShows}) {

  const [submittedForm, setSubmittedForm] = useState(false)

  const navigate = useNavigate()

  if(submittedForm){
    navigate('/movies')
  }

  const [newMovie, setNewMovie] = useState({
    favorite: false
  })

  function handleInput(e) {
    const {name, value} = e.target
    if (name === "year_release") {
      setNewMovie({...newMovie, [name]: Number(value)})
    } else {
    setNewMovie({...newMovie, [name]: value})
    }
  }

    function handleSubmit(e) {
      e.preventDefault()
      fetch(`http://localhost:1993/movie`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(newMovie)
      })
      .then(resp => resp.json())
      .then(addedNew => {
        setShows([...shows, addedNew])
      })
    }

    return (
      <>
      <NavBar />
        <div className="new-movie-form">
          <h2>Add New Movie</h2>
          <form onSubmit={(e)=>{
            handleSubmit(e)
            setSubmittedForm(true)}}>
            <input onChange={handleInput} type="text" name="title" placeholder="Title" /><br/>
            <input onChange={handleInput} type="text" name="image" placeholder="Image URL" /><br/>
            <input onChange={handleInput} type="number" name="year_release" placeholder="Released Year" /><br/>
            <input onChange={handleInput} type="text" name="detail" placeholder="Movie Info" /><br/>
            <input onChange={handleInput} type="text" name="trailer_url" placeholder="Trailer URL" /><br/>
            <button type="submit">Add</button>
          </form>
          <img alt="form-deco" src="https://i.imgur.com/h7DCzoh.png"/>
        </div>
      </>
      );
};

export default NewMovie;