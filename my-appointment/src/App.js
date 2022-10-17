import { BiArchive } from "react-icons/bi";
import './App.css';
import Search from "./component/Search";
import colordata from "./data/color.json"
import Colorinfo from "./component/Colorinfo"
import Adddata from "./component/Adddata";

export function styleobjret(col) {
  return ({
    color: col
  })
};

function App() {
  //  inline styling can be done with `` symbol to pass valiable which return a tyle object, direct style tag can be used

  var m1 = "{colordata.map(d => (<h1 style={styleobjret(`${d.value}`)} > { d.color }</h1>))}";
  var m2 = "{colordata.map((d) => {return (<h1 style={styleobjret(`${d.value}`)} > { d.color }</h1>);})}";
  var m3 = "{colordata.map((ddd) => { return <Colorinfo key={ddd.id} colord = {ddd} />})}";
  return (
    

    <div className='App container mx-auto mt-3 font-thin'>
      <h1 className='text-5xl'>
        <BiArchive className="inline-block text-red-400 align-top" /> Your Appointments
      </h1>
      <Search />

      <h1> Listing using Methode one <br /> </h1> <h6>{m1}</h6>
      <ul>
        {colordata.map(d => (<h1 style={styleobjret(`${d.value}`)} > { d.color }</h1>))}
      </ul>
      <h1> Listing using Methode two <br /> </h1><h6>{m2}</h6>
      <ul>
        {colordata.map((d) => {
          return (<h1 style={styleobjret(`${d.value}`)} > { d.color }</h1>);
        })}
      </ul>

      <h1> Listing using finalizing the methode in optimal form </h1>
      <br />
      <h6>{m3}</h6>
      <ul>
        {colordata.map((ddd) => { return <Colorinfo key={ddd.id} colord = {ddd} />})}
      </ul>

    
      <Adddata />
    </div>
  );
}

export default App;
