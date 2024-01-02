import React from 'react';
import { BrowserRouter as Router,Switch, Route } from 'react-router-dom';
import About from './Components/About';
import Home from './Components/Home';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import NewPage from './Components/NewPage';

const App = () => {
  return (
    <>
    <Header/>
    <Navbar/>
    
    <Router>
      <div>
        <Switch>
        <Route exact path="/" component={Home}>
        <Home/>
        </Route>
        <Route path="/about" component={About}>
        <About/>
        </Route>
        <Route path="/NewPage" component={NewPage}>
        <NewPage/>
        </Route>
        </Switch>
      </div>
    </Router>
    <Footer/>
    </>
  );
};

export default App;