import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeResource from "./components/resources/Home"
// import Home from "./components/home/W3m-button"
import './App.css';

function App() {
  return (
    <>
    <Router>
          <Routes>
            <Route exact path="/resource" element={<HomeResource/>}/>
            {/* <Route exact path="/" element={<Home/>}/> */}
          </Routes>
      </Router>
    </>
  );
}

export default App;
