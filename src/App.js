import React, { Component } from 'react';
import './App.css';
import Navbar from './components/navbar';
import Footer from './components/footer';
import { Route, Switch } from "react-router-dom";
import About from './components/about';
import Home from './components/home';
import SignUp from './components/sign-up';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SignIn from './components/sign-in';
import userService from "./services/userService";

class App extends Component {
  state = {}



  componentDidMount = () => {
    const user = userService.getCurrenntUser();
    this.setState({ user })
  }
  render() {
    const { user } = this.state
    return (
      <React.Fragment>
        <header>
          <ToastContainer />
          <Navbar user={user} />
        </header>

        <main>
          <Switch>
            <Route path="/about" component={About} />
            <Route path="/" exact component={Home} />
            <Route path="/user/sign-up" exact component={SignUp} />
            <Route path="/user/sign-in" exact component={SignIn} />
          </Switch>
        </main>

        <footer>
          <Footer />
        </footer>
      </React.Fragment>
    );
  }
}

export default App;
