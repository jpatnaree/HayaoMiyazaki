import NavBar from "../component/NavBar";


function ErrorPage () {
    return ( <>
    <NavBar />
        <div id="error">
    <h1>Opps! Sorry, there's nothing here.</h1>
    <img alt="error" src="https://i.imgur.com/58YzfKV.png" />
    </div>
    </>
    )
  };

export default ErrorPage;