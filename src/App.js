import './App.css';
import React from 'react';
import HomePage from './pages/homepage';
import ShopPage from './pages/shop';
import SignInAndSignOutPage from './pages/sign-in-and-sign-up';
import { Switch, Route } from 'react-router-dom';
import Header from './components/header';
import { auth } from './firebase/firebase.utils';
import { render } from '@testing-library/react';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
      console.log(user);
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/shop" component={ShopPage}/>
          <Route exact path="/signin" component={SignInAndSignOutPage} />
        </Switch>
        
      </div>
    );
  };
};

export default App;
