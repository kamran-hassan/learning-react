import { useState, useEffect} from "react";

function GituserProfile(props) {
    return (
        <div>
            <h1 className="namestyle">{props.name}</h1>
            <h3>{props.id}</h3>
            <div className="photocontainer">
            <img className="photo" src={props.avatar_url} />
            </div>
        </div>
    )
}

function FetchApi(){

    const [data, setdata] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        fetch(`https://api.github.com/users/kamran-hassan`).then((response) => response.json()).then(data => {setdata(data)});
    }, [] );  // dont forget to give an empty array so you only fetch data once 

    if(data){
    return (
        <div>
            <GituserProfile 
            name = {data.name}
            id = {data.id}
            avatar_url = {data.avatar_url}
             />
        </div>

    )
    }
}

export default FetchApi;