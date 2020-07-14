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
import Logout from './components/logout';
import BizSignup from './components/biz-signup';
import CreateCard from './components/create-card';
import ProtectedRoute from "./components/common/protected-route";
import MyCards from './components/my-cards';
import EditCard from './components/edit-card';
import DeleteCard from './components/delete-card';
class App extends Component {
  state = {}

  componentDidMount = () => {
    const user = userService.getCurrentUser();
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
            <ProtectedRoute path='/my-cards/edit/:id' component={EditCard} biz={true} />
            <ProtectedRoute path='/my-cards/delete/:id' component={DeleteCard} biz={true} />
            <ProtectedRoute path='/create-card' component={CreateCard} biz={true} />
            <ProtectedRoute path='/my-cards' component={MyCards} biz={true} />
            <Route path="/user/logout" component={Logout} />
            <Route path="/user/sign-in" exact component={SignIn} />
            <Route path="/user/sign-up" exact component={SignUp} />
            <Route path="/biz/sign-up" exact component={BizSignup} />
            <Route path="/about" component={About} />
            <Route path="/" exact component={Home} />
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
