//React state chapter 4b
import React, {useState, useEffect, useReducer} from "react";
import './App.css';

function AppUseSt() {
  const [emotion, setEmotion] = useState("happy");
  const [secondary, setSecondary] = useState("tired");
  //Log only changes in emotion
  useEffect(() => {console.log(`I'm very ${emotion} here.`);}, [emotion]);
  //Log only changes in secondary
  useEffect(() => {console.log(`I'm very ${secondary} here.`);}, [secondary]);

//Toggle button & function with useState and "reducer" function
  // const [checked, setChecked] = useState(false);
  // function toggle() {
  //   setChecked((checked) => !checked);
  // }

//Toggle button & function with useReducer. Replaces the function
const [checked, toggle] = useReducer(
//(checked) => !checked,                  //Reducer function, arrow syntax
  function (checked) {return !checked;},  //Reducer function, classic syntax
  false                   //Initial state
);

  return (
    <>
      <h2>I am {emotion} and {secondary} Checked = {checked ? "ON" : "OFF"}</h2>
      <button onClick={() => setEmotion("frustrated")}>Frustrate</button>
      <button onClick={() => setEmotion("enthousiastic")}>Enthuse</button>
      <button onClick={() => setEmotion("happy")}>Make Happy</button>
      <button onClick={() => setSecondary("crabby")}>Make Crabby</button>
      <button onClick={() => setSecondary("energetic")}>Make Energetic</button>
      <input type="checkbox" value={checked} onChange={toggle} />
    </>
  );
}

export default AppUseSt;
