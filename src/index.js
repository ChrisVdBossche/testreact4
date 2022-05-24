import React from 'react';
import './index.css';
//import ReactDOM from 'react-dom';       //react17
import ReactDOM from 'react-dom/client';  //react18
// import AppOne from './AppOne';
// import AppState from './AppState';
// import AppUseState from './AppUseState';
// import App from './App';
import AppUseData from './AppUseData';
//import reportWebVitals from './reportWebVitals';

// function AppTwo() {
//   return(
//     <h3>This is the 2nd App</h3>
//   )
// }

console.reportErrorsAsExceptions = false;

//Zoals in create-react-app (react18, current)
const root = ReactDOM.createRoot(document.getElementById('root'));
// <>...</> is short for <React.Fragment>...</React.Fragment>  
root.render(
  <React.StrictMode>
     <> 
		<AppUseData login = {"chrisvdbossche"}/>
		{/* <AppOne />
    	<AppUseState />
    	<AppState authorized = {false}/>
    	<AppTwo />  */}
     </> 
  </React.StrictMode>
//  React.createElement("h1", {style: {color:"red"}}, "Hello World"),
);

/*
//Zoals in linkedin essential training (react17, ReactDOM.render() is deprecated in react18)
ReactDOM.render(
  <App />, document.getElementById("root")
);
*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals(console.log);
