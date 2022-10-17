import { BiArchive } from "react-icons/bi";
import './App.css';
import Search from "./component/Search";
import colordata from "./data/color.json"

function styleobjret(col) {
  return ({
    color: col
  })
};

function App() {
  //  inline styling can be done with `` symbol to pass valiable which return a tyle object, direct style tag can be used
  return (
    

    <div className='App container mx-auto mt-3 font-thin'>
      <h1 className='text-5xl'>
        <BiArchive className="inline-block text-red-400 align-top" /> Your Appointments
      </h1>
      <Search />

      <ul>
        {colordata.map(d => (<h1 style={styleobjret(`${d.value}`)} > { d.color }</h1>))}
      </ul>
      
    </div>
  );
}

export default App;
