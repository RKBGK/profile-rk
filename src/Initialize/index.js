import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
// import SignIn from '../views/SignIn';
import Navigation from '../Components/Navigation';
import Routes from '../routes';

function Initialize() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((authed) => {
      if (authed) {
        const userInfoObj = {
          fullName: authed.displayName,
          uid: authed.uid,
          isAdmin: process.env.REACT_APP_ADMIN_UID === authed.uid,
        };
        setUser(userInfoObj);
      } else if (user || user === null) {
        setUser(false);
      }
    });
  }, []);

  return (
    <div className="App">
      <>
        {user ? <h5>{user.fullName} </h5> : ''};
        <Navigation user={user} />
        <Routes user={user} />
        {/* <SignIn user={userInfoObj} /> */}
      </>
    </div>
  );
}

export default Initialize;
