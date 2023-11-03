import logo from './logo.svg';
import './App.css';
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';

function App() {

  // const routes = [
  //   {
  //     path: "/",
  //     element: <h1>Elloo</h1>
  //   }
  // ]

  // const router = RouterProvider(routes)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          My Project with spinning React logo
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React at Flatiron School
        </a>
      </header>
    </div>
  );
}

export default App;
