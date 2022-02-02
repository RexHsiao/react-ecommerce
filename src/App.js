import './App.css';
import React from 'react';
import HomePage from './pages/homepage';
import ShopPage from './pages/shop';
import SignInAndSignOutPage from './pages/sign-in-and-sign-up';
import { Switch, Route } from 'react-router-dom';
import Header from './components/header';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
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
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          }, () => {
            console.log(this.state);
          })
        });
        
      } else {
        this.setState({ currentUser: userAuth });
      }
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
