import { useState, useEffect, isValidElement } from "react";

const tahoe_peaks = [
    {name: "Freel", elevationGain: 10891},
    {name: "Mounument", elevationGain: 10067},
    {name: "Pyramid", elevationGain: 9983},
    {name: "Tallac", elevationGain: 9735}
];

function List( {data, renderItem, renderEmpty}){
    return !data.length ? (renderEmpty) : (
        <ul>
            {data.map((item)=> (
                <li key={item.name}>{renderItem(item)}</li>
            ))}
        </ul>
    )
}


function ListingTechnique(){
    return (
        <List data = {tahoe_peaks}
        renderEmpty = {<p>This list is empty</p>}
        renderItem = {(item) => (<>{item.name} - {item.elevationGain} feet</>)} />   // react short hand syntax
    )
}

export default ListingTechnique;