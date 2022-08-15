import { Component } from 'react';
import './App.css';
import { Route,Routes } from 'react-router-dom';
import Navbar from './Component/Navbar'
import Home from './Component/Home';
import Footer from './Component/Footer';
import './App.css';


class App extends Component {
  render(){
    return (
      <div className="App">
        
        <Navbar/>
        <Home/>
        <Footer/>
        
        {/* <Routes>
          <Route exact path='/' element = {<Home/>}/>
          <Route path='/About' element = {<About/>} />
          <Route path='/Skills' element = {<Skills/>} />
          <Route path='/Experience' element = {<Experience/>} />
          <Route path='/Contact' element = {<Contact/>} />
        </Routes> */}
      </div>
    );
  }
}

export default App;
