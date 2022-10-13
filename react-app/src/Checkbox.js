import { useReducer } from "react";

export function Checkbox(){
    const [checked, setChecked] = useReducer(
        (checked) => !checked,    // custom logic is provided, this feature is not present in useState
        false
    );
    return(
        <>
            <label htmlFor="checked">
                {checked? "checked": "not checked"}
            </label>
            <input
            id="checked" 
            type="checkbox" 
            value={checked} 
            onChange={setChecked} />
        </>
    )
}