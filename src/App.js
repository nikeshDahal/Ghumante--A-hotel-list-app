import Navbar from "./components/Navbar";
import Photogrid from "./components/Photogrid";
import Contacts from "./components/Contacts";
import image from "./images/pexels-photo-674010.jpeg";
import Footer from "./components/Footer";
import JokesData from "./components/JokesData";
import Jokes from "./components/Jokes";
import img2 from "./images/pexels-photo-674010.jpeg";

export default function App() {
  var extractedJokes = JokesData.map((joke) => {
    return <Jokes 
    key={joke.id}
    {...joke}
    // joke={joke}
          />;
  });
  return (
    <div>
      <Navbar />
      <Photogrid />
      <h1 className="jokes-title">Lists Of Hotels</h1>
      <Contacts/>
      <h2 className="jokes-title">Have some fun !</h2>
      {extractedJokes}
      
      <Footer />
    </div>
  );
}
