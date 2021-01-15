import React, { Component } from "react";
import {
  Router,
  Route,
  Switch,
  BrowserRouter,
  Redirect,
} from "react-router-dom";
import { createBrowserHistory } from "history";

import Components from "views/Components/Components.js";
import LandingPage from "views/LandingPage/LandingPage.js";
import ProfilePage from "views/ProfilePage/ProfilePage";
import LoginPage from "views/LoginPage";
import { connect } from "react-redux";
import { setBaseURL, API_URL, setCustomHeaders } from "redux/apis";
import "assets/scss/material-kit-react.scss?v=1.9.0";
import RegisterPage from "views/RegisterPage";
import RegisterKoperasi from "views/RegisterPage/RegisterKoperasi";
import RegisterMember from "views/RegisterPage/RegisterMember";

// class App extends Component {
//   constructor(props) {

//     super(props);
//     this.state = {
//       hasLogin: false,
//     };
//   }
//   componentWillReceiveProps(newProps) {
//     if (newProps.dataAuth !== this.props.dataAuth) {
//       if (newProps.dataAuth.login) {
//         console.log(JSON.stringify(newProps.dataAuth));
//         this.setState({ hasLogin: this.props.dataAuth.login.status });
//       }
//     }
//   }

//   render() {

//     const { hasLogin } = this.state;
//     return (

//     );
//   }
// }

const App = ({ token, dataAuth }) => {
  setBaseURL(API_URL);
  if (token) {
    setCustomHeaders([
      {
        name: "Authorization",
        value: token,
      },
    ]);
  }
  const { login } = dataAuth;
  const hist = createBrowserHistory();
  return (
    <Router history={hist}>
      <Switch>
        <Route path="/landing-page" component={LandingPage} />
        <Route
          path="/profile-page"
          component={!login.status ? Components : ProfilePage}
        />
        <Route
          path="/login-page"
          component={login.status ? Components : LoginPage}
        />
        <Route path="/register-page" component={RegisterPage} />
        <Route path="/register-koperasi" component={RegisterKoperasi} />
        <Route path="/register-member" component={RegisterMember} />
        <Route path="/" component={Components} />
      </Switch>
    </Router>
  );
};

const mapStateToProps = ({ auth }) => {
  const dataAuth = auth;

  return { dataAuth };
};

export default connect(mapStateToProps)(App);
