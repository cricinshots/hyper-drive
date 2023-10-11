import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeResource from "./components/resources/Home"
import Export from "./components/transfer/Export"
import Import from './components/transfer/Import'
import Home from './components/home/Home'
import './App.css';

function App() {
  return (
    <>
    <Router>
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/resource" element={<HomeResource/>}/>
            
            <Route exact path="resource/transfer/export" element={<Export/>}/>
            <Route exact path="resource/transfer/import" render={(props) => {<Import {...props}/>}}/>

          </Routes>
      </Router>
    </>
  );
}

export default App;
