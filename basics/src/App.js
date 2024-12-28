import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

function App() {
  let name = 'Pooja';
  return (
    
    <div>
    <h1>Hello  kaayuuuuu</h1>
    <Header />
    <Home name ={name} age = {24} />
    <About />
    <Contact />
    </div>
  );
}

export default App;
