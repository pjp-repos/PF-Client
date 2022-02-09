
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from './Componentes/HomePage';
import NavBar2 from "./Componentes/NavBar2"

function App() {
  return (

    <BrowserRouter>
    
      <div className="App">
        <NavBar2/>
        <Routes>

          <Route exact path= "/" element= {<HomePage/>}/>
         
          

        </Routes>
      </div>

    </BrowserRouter>
  );
}

export default App;
