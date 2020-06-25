import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import Footer from './components/footer';
import { Route, Switch } from "react-router-dom";
import About from './components/about';
import Home from './components/home';
import SignUp from './components/sign-up';

function App() {
  return (
    <React.Fragment>
      <header>
        <Navbar />
      </header>

      <main>
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/" exact component={Home} />
          <Route path="/user/sign-up" exact component={SignUp} />
        </Switch>
      </main>

      <footer>
        <Footer />
      </footer>
    </React.Fragment>
  );
}

export default App;
