import { useState } from "react";

export const useLoggedState = (initialValue = false) => {
    const [logged, setLogged] = useState(initialValue);

    const login = () => {
        setLogged(true);
    }

    const logout = () => {
        setLogged(false);
    }

    return { logged, login, logout };
}