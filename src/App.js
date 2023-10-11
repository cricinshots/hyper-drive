import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeResource from "./components/resources/Home"
import Transfar from "./components/transfer/MainT"
import './App.css';

function App() {
  return (
    <>
    <Router>
          <Routes>
            <Route exact path="/resource" element={<HomeResource/>}/>
            {/* <Route exact path="/" element={<Home/>}/> */}
            <Route exact path="/transfer" element={<Transfar/>}/>
          </Routes>
      </Router>
    </>
  );
}

export default App;
