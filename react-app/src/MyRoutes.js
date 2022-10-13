import { Link, Outlet } from "react-router-dom";


export function Home() {
    
    return (
    <div>
    <Link to= "/Home"> Home </Link>
    <Link to="/About"> About</Link>
    <h1> My website Home</h1>
    </div>
    );
};

export function About() {
    return (
        <div>
        <Link to= "/Home"> Home </Link>
        <Link to="/About"> About</Link>
        <h1> This is About Page</h1>
        <Outlet />
        </div>
        )
}

export function History(){
    return(<h3>This is history</h3>)
}
