import Navbar from "./components/navbar/navbar";
import Intro from "./components/intro/intro";
import Whatwedo from "./components/whatwedo/whatwedo";
import Pastproject from "./components/pastprojects/pastproject";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Whatwedo />
      <Pastproject />
      <Contact />
      <Footer />
    </div>
  );
}
 
export default App;
