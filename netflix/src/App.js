import React, { useEffect } from 'react';
import './App.css';
import Homescreen from "./components/Homescreen";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Loginscreen from './components/LoginScreen';
import { auth } from './Firebase';
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./components/features/userSlice";
import ProfileScreen from './components/ProfileScreen';


function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() =>{
    const unsubscribe = auth.onAuthStateChanged((userAuth) =>{
      if(userAuth) {
        //Logged In

        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email,
        }))
      } else {
        // Logged Out
        dispatch(logout());
      }
    });

    return unsubscribe;
  }, [])

  return (
    <div className="App">  
      <Router>
        {!user ? ( <Loginscreen />): (
          <Switch>
            <Route path="/profile">
              <ProfileScreen />
            </Route>
          <Route exact path="/">
            <Homescreen />
          </Route>
        </Switch>
        )}
      </Router>
    </div>
  );
}

export default App;
