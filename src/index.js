import React, { Component } from "react";
import ReactDOM from "react-dom";
import "semantic-ui-css/semantic.min.css";
import App from "./components/App";
import Register from "./components/auth/Register";
import Signin from "./components/auth/Signin";
import firebase from "./firebase";
import { setUser, clearUser } from "./actions";
import { createStore } from "redux";
import { Provider, connect } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import Spinner from "./Spinner";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter
} from "react-router-dom";
import rootReducer from "./reducers";

const store = createStore(rootReducer, composeWithDevTools());

class Root extends Component {
  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.props.setUser(user);
        this.props.history.push("/");
      } else {
        this.props.history.push("/signin");
        this.props.clearUser();
      }
    });
  }

  render() {
    return this.props.isLoading ? (
      <Spinner />
    ) : (
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/register" exact component={Register} />
        <Route path="/signin" exact component={Signin} />
      </Switch>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: state.user.isLoading
});

const RootWithAuth = withRouter(
  connect(
    mapStateToProps,
    { setUser, clearUser }
  )(Root)
);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <RootWithAuth />
    </Router>
  </Provider>,
  document.getElementById("root")
);
