
import NavBar from "../component/NavBar";


function Home () {
    return(
        <>
        <NavBar />
        <div className="home">
                <h1>Welcome to The Library of Hayao Miyazaki</h1>
             <aside><img id="miyazaki" alt="miyazaki" src="https://i.imgur.com/xWUefyc.jpg" /> </aside>
             <h2 id="hometext"> 
                Hayao Miyazaki is a Japanese animator, filmmaker, and manga artist. A co-founder of Studio Ghibli, 
            he has attained international acclaim as a masterful storyteller and creator of Japanese animated feature films,
             and is widely regarded as one of the most accomplished filmmakers in the history of animation.
             </h2>
        </div>
        </>
    )
};

export default Home;