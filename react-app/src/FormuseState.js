import { useState } from "react";

function FormuseState() {

    const [initionalUal, setVal] = useState("");

    const submit = (e) => {
        e.preventDefault();
        alert(initionalUal)
        initionalUal="";
        // console.log(document.getElementById("inp").value); we will not be doing like this
    }

    return (
        <form onSubmit={submit}>
            <h4> Form With use state </h4>
            <input value ={initionalUal} onChange={(event) => {setVal(event.target.value)}} type="text"/>
            <button> DO It</button>
        </form>
    );
};

export default FormuseState;