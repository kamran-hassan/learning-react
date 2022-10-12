// contains error contains error contains error contains error contains error 

import { useState, useEffect } from "react"

const q = `
query {
	allLifts {
    name
    elevationGain
    status
  }
}
`;

const opt = {
    method: "POST",
    headers: { "Content-Type": "application/json"},
    body: JSON.stringify({q})
};

function Lift({name, elevationGain, status}){
    return (
        <div>
            <h1> {name} </h1>
            <p> {elevationGain} {status} </p>
        </div>
    )
}

function Someapitest() {
    const [loading, setloading] = useState(false);

    

    useEffect(() => {
        setloading(true);
        fetch(
            `https://snowtooth.moonhighway.com/`,
            opt
        ).then((response) => console.log(response)).then(()=>setloading(false))
    }, []);


    if(loading) return <h1> Loading... </h1>
    if(!loading) return <h1> Loaded </h1>
}


export default Someapitest