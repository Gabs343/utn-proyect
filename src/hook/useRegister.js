import { useState } from "react";

export const useRegister = (initialValue = false) => {
    const [show, setShow] = useState(initialValue);

    const on = () => {
        setShow(true);
    }

    const off = () => {
        setShow(false);
    }

    return { show, on, off };
}