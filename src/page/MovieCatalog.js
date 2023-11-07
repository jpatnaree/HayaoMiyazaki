import React, { useState, useEffect } from 'react';
import MyWatchList from '../component/MyWatchList'
import ShowList from '../component/ShowList'
import Search from '../component/Search';
import NavBar from '../component/NavBar';

function MovieCatalog({shows, setShows, myshow, setMyshow, updateMyShow}) {

    const [searchBar, setSearchBar] = useState('');
    
    function deleteMyShow(id) {
        setMyshow(myshow.filter(show => {
            return show.id !== id
        }))
    };

    function deleteBoth(id) {
        setShows(shows.filter((show) => {
            return show.id !== id

        }))
        fetch(`http://localhost:1993/movie/${id}`, {
            method: "DELETE"

        })
        deleteMyShow(id)
    };
    //To sort by year
const [sortYear, setSortYear] = useState([])

useEffect(() => {
  fetch(`http://localhost:1993/movie`)
  .then(r => r.json())
  .then(sortY => {setSortYear(sortY)
  })
},[])

  sortYear.sort((a, b) => {
    const yearA = a.year_release; // ignore upper and lowercase
    const yearB = b.year_release; // ignore upper and lowercase
    if (yearA < yearB) {
      return -1;
    }
    if (yearA > yearB) {
      return 1;
    }
    return 0;
  });

//   console.log(sortYear);

  // To sort by name

  const [sortName, setSortName] = useState([])

  useEffect(()=> {
    fetch(`http://localhost:1993/movie`)
    .then(r => r.json())
    .then(sortN => setSortName(sortN))
  },[])

  sortName.sort((a, b) => {
    const titleA = a.title.toUpperCase(); // ignore upper and lowercase
    const titleB = b.title.toUpperCase(); // ignore upper and lowercase
    if (titleA < titleB) {
      return -1;
    }
    if (titleA > titleB) {
      return 1;
    }

    return 0;
  });

//   console.log(sortName);
const [dropDown, setDropDown] = useState('');

  function toSetDropDown(e) {
    setDropDown(e.target.value)
  }

  console.log(dropDown)

  function sorting() {
    if(dropDown === "none") {
        return shows.filter(show => {
            return show.title.toUpperCase().includes(searchBar.toUpperCase()) || (show.year_release + "").toUpperCase().includes(searchBar.toUpperCase())
        })
    } else if (dropDown === "byname") {
        return sortName.filter(show => {
            return show.title.toUpperCase().includes(searchBar.toUpperCase()) || (show.year_release + "").toUpperCase().includes(searchBar.toUpperCase())
        })
    } else if (dropDown === "byyear") {
        return sortYear.filter(show => {
            return show.title.toUpperCase().includes(searchBar.toUpperCase()) || (show.year_release + "").toUpperCase().includes(searchBar.toUpperCase())
        })
    }
  };
    
const filteredSearch = shows.filter(show => {
    return show.title.toUpperCase().includes(searchBar.toUpperCase()) || (show.year_release + "").toUpperCase().includes(searchBar.toUpperCase())
});

    return(
        <>
            <NavBar />
            <MyWatchList myshow={myshow} deleteMyShow={deleteMyShow} />
            <hr/>
            <Search setSearchBar={setSearchBar} />
            <label for="sorting" className='sort'>Sort By:</label> 
                <select onChange={toSetDropDown} name="sort" id="sort"> 
                    <option value="none" name="none" >None</option> 
                    <option value="byname" name="byname" >Released Year</option> 
                    <option value="byyear" name="byyear" >Name</option> 
                </select>
            <ShowList shows={filteredSearch} updateMyShow={updateMyShow} deleteBoth={deleteBoth} setShows={setShows}/>
            
        </>
    );
}

export default MovieCatalog;