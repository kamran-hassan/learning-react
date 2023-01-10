import { useReducer, useState } from "react";

export const useToken = () => {
    // creating internal state that is linked to the user local storage inside the browser
    const [token, setTokenInternal] = useState(() => {
        return localStorage.getItem('token');
    });

    const setTocken = (newToken) => {
        localStorage.setItem('token', newToken);
        setTokenInternal(newToken);
    }

    return [token, setTocken];     // so any module of application want to changes the tocken it can be achieved by useTocken hooks
}