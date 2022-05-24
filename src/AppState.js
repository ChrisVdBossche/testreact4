//React state chapter 4a
import React, {useState} from "react";
import './App.css';

function SecretComponent() {
  return <h2>For your eyes only</h2>
}

function RegularComponent() {
  return <h2>For everyone to see</h2>
}

function AppState(props) {
  const [auth, setAuth] = useState(false); //replaces the props.authorized

  // if(props.authorized) {
  //   return <SecretComponent />
  // } else {
  //   return <RegularComponent />
  // }
  return (
    <>
      {auth ? <SecretComponent /> : <RegularComponent />}
      <button onClick={() => setAuth(true)}>Authorize</button>
      <button onClick={() => setAuth(false)}>Deny access</button>
   </>
  );
}


export default AppState;
