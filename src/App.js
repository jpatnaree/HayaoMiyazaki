// import logo from './logo.svg';
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
        <img src="picture/Hayao_Miyazaki_cropped_1_Hayao_Miyazaki_201211.png" className="App-logo" alt="logo" />
        <p>
          Test, Test, Spinning React LOGO
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
