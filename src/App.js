import React from 'react';
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ReactDOM from 'react-dom';
import Header from "./component/Header";
import Home from './component/Pages/Home';
import About from './component/Pages/About';
import Contact from './component/Pages/Contact';
import Setsashimi from './component/Products/Setsashimi';
import Sushi from './component/Products/Sushi';
import DetailSetsashimi from './component/Products/DetailSetsashimi';
import DetailSushi from './component/Products/DetailSushi';





function App() {

ReactDOM.render(
  <React.StrictMode>
       <Router>
          <Routes>
          <Route exact path="/" element={<Header />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />}/>
            <Route path="/setsashimi" element={<Setsashimi />}/>
            <Route path="/sushi" element={<Sushi />} />
            <Route path="/detailSetsashimi/:itemDetail" element={<DetailSetsashimi/>}/>
            <Route path="/detailSushi/:itemDetail2" element={<DetailSushi/>}/>

          </Routes>
        </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
}

export default App;
