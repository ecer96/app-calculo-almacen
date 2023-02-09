import "./App.css";
import { Footer } from "./Components/Footer";
import { NavBar } from "./Components/NavBar";
import { Reto } from "./Components/Reto";

function App() {
    return (
        <div className="App">
            <NavBar />
            <Reto />
            <Footer />
        </div>
    );
}

export default App;
