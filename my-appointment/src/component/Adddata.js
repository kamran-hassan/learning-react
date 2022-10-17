import { useState } from "react"

function Adddata() {
    const [expand, expandit] = useState(false);
    return (
        <div>
        <button onClick={() => {expandit(!expand)}} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
        Add ColorData
        </button>
        
        {
        expand && 
        (
        <form>
        <label>
        Name:
        <input type="text" name="name" />
        </label>
        <label>
        Value:
        <input type="color" name="value"/>
        </label>
        </form>
        )
        } 
        

        </div>
    )
}

export default Adddata;