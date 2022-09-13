// form manage ment using useRef  Note useState can also be use for handeling froms

import "./App.css" 
import { useRef } from "react";
function Form() {

    const colorname = useRef();
    const colorhex = useRef();

    

    const submit = e => {
        e.preventDefault();
        const col = colorname.current.value;
        const colhex = colorhex.current.value;
        alert(col+` `+colhex);
    }

    return (
            <form onSubmit={submit}>
                <input ref = {colorname} type = "text" />
                <input ref = {colorhex} type= "color" />
                <button>ADD</button>
            </form>
    );
};

export default Form;