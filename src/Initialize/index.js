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
          profileImage: authed.photoURL,
          uid: authed.uid,
          user: authed.email.split('@')[0],
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
        <Navigation user={user} />
        <Routes />
        {/* <SignIn user={userInfoObj} /> */}
      </>
    </div>
  );
}

export default Initialize;
