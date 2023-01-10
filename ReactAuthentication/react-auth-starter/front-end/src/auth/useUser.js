import { useState, useEffect, useContext } from "react";
import { useToken } from "./useToken";

export const useUser = () => {
    const [token,] = useToken();

    // token is base64 version of the user information so we need to parse the value

    const getPayLoadFromToken = (token) => {
        const encodedPayload = token.split('.')[1];
        return JSON.parse(atob(encodedPayload));
    };

    const [user, setUser] = useState(() => {
        if(!token) return null;
        return getPayLoadFromToken(token);
    });

    useEffect(() => {
        if(!token){
            setUser(null);
        } else {
            setUser(getPayLoadFromToken(token));
        }
    }, [token]);


    return user;

}