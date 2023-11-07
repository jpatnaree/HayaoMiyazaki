import './App.css';
import Header from "./component/Header"
// import NavBar from './component/NavBar';
import MovieCatalog from "./page/MovieCatalog"
import Home from "./page/Home"
import ErrorPage from "./page/ErrorPage"
import { useState, useEffect } from 'react';
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import NewMovie from './page/NewMovie';
import MovieDetail from './page/MovieDetail';
import FavMovie from './page/FavMovie';

function App() {

  const [shows, setShows] = useState([])
  const [myshow, setMyshow] = useState([])

  useEffect(() => {
    fetch('http://localhost:1993/movie')
    .then(resp => resp.json())
    .then(showJSON => {
        setShows(showJSON)
    })
}, [])


function updateMyShow(show) {
    const clickesShow = myshow.find(s => {
        return s.id === show.id
    })
    if (!clickesShow) {
        setMyshow([...myshow, show])
    }
}


 // Router 
  const routes = [
    {
      path: "/",
      element: <Home/>,
      errorElement: <ErrorPage/>
    },
    {
      path: "/new",
      element: <NewMovie shows={shows} setShows={setShows}/>,
      errorElement: <ErrorPage/>
    },
    {
      path: "/movies",
      element: <MovieCatalog shows={shows} setShows={setShows} myshow={myshow} setMyshow={setMyshow} updateMyShow={updateMyShow} />,
      errorElement: <ErrorPage/>
    },
    {
      path: "/movies/:id",
      element: <MovieDetail shows={shows} />,
      errorElement: <ErrorPage/>
    },
    {
      path: "/favorite",
      element: <FavMovie shows={shows} />,
      errorElement: <ErrorPage/>
    }
  ]

  const router = createBrowserRouter(routes)

  return (
    <>
      <Header />
      
      {/* <Home />
      <ErrorPage /> */}
      {/* <MovieCatalog shows={shows} setShows={setShows} myshow={myshow} setMyshow={setMyshow} updateMyShow={updateMyShow} /> */}

      <RouterProvider router={router}/>
    </>
  );
}

export default App;
