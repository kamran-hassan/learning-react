export function styleobjret(col) {
    return ({
      color: col
    })
  };

  
function Colorinfo({colord}) {
    return ( 
    <h1 style={styleobjret(`${colord.value}`)} > { colord.color } </h1>
    );
}

export default Colorinfo;   