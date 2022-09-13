// should start with use
import { useState } from "react";

function useInput(initialValue) {
    const [value, setValue] = useState(initialValue);
    return [
        {value,
        onChange: (e) => setValue(e.target.value)},
        () => setValue(initialValue)
    ]
}


function CustomHookForm(){
    const [colorprops, resetcolor] = useInput("#000000");

    const submit = (e) => {
        e.preventDefault();
        alert(`${colorprops.value}`)
        resetcolor();
    };


    return (
        <div>
            <form onSubmit={submit}>
            <h4> Custom hooks </h4>
            <input
            {...colorprops}
            type="color" />
            <button>GO</button>
            </form>
        </div>
    );
};

export default CustomHookForm;