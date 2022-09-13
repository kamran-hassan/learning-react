import './App.css';
import { useState, useEffect } from "react";
import Form from './Form'

function App( {library}) {    // this is called destructing 
  const [emotion, setEmotion] = useState("Happy");
  function settemotion() {
    if (emotion === 'Happy') setEmotion("More Happy");
    else setEmotion('Happy');
  }

  const [checked, setChecked] = useState(false);
  //console.log(`Initial Check box is ${checked}`);
  useEffect(() => {
    console.log(`new emotion is ${emotion}`);
  }, [emotion]);  // [emotion means wheneveer the emotion changes it will be going to be reflected]

  // console.log(emotion);
  useEffect(() => {
    console.log(`box is ${checked}`);
  }, [checked]);
  return (
    <div>
    <div className='App'> Current Emotion = {emotion}</div>
    <button onClick ={() => settemotion()}> change Emotion </button>
    <div>
      <input type ="checkbox"
      value={checked}
      onChange={() =>  setChecked((checked) => !checked)} />
      <label> {checked ? "checked" : "not checked"}</label>
    </div>

    <div>
      <Form />
    </div>

    </div>
  );
}

export default App;
