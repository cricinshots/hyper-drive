import { BrowserRouter as Router, Routes, Route ,useSearchParams} from "react-router-dom";
import HomeResource from "./components/resources/Home"
import Export from "./components/transfer/Export"
import Import from './components/transfer/Import'
import Home from './components/home/Home'
import './App.css';
const SetColy = ()=> {
  const [params, setParams] = useSearchParams();
  setTimeout(() => {
    if(params.get("colyseusToken"))
     localStorage.setItem('colyseusToken',params.get("colyseusToken"))
    console.info(localStorage.getItem("colyseusToken"))
  })
  return <></>
}
function App() {


  return (
    <>
    <Router basename={"/hyperdrive"}>
      <SetColy/>
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/resource" element={<HomeResource/>}/>

            <Route exact path="resource/transfer/export" element={<Export/>}/>
            <Route exact path="resource/transfer/import" element={<Import/>}/>

          </Routes>
      </Router>
    </>
  );
}

export default App;
