import "./App.css";
import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";
import Router from "./Routes/router";

function App() {
  return (
    <>
      <NavBar />
      <Router></Router>
      <Footer />
    </>
  );
}

export default App;
