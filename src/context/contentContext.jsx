import React, { createContext, useState } from "react";

const Context = createContext()

function CtxProvider({ children }) {
    const [show1, setShow1] = useState(true)
    const [show2, setShow2] = useState(false)
    const [show3, setShow3] = useState(false)
    const [show4, setShow4] = useState(false)
    
    const showHide1 = () => {
        setShow1(true)
        setShow2(false)
        setShow3(false)
        setShow4(false)
    }
    
    const showHide2 = () => {
        setShow1(false)
        setShow2(true)
        setShow3(false)
        setShow4(false)
    }
    
    const showHide3 = () => {
        setShow1(false)
        setShow2(false)
        setShow3(true)
        setShow4(false)
    }
    
    const showHide4 = () => {
        setShow1(false)
        setShow2(false)
        setShow3(false)
        setShow4(true)
    }

    return (
        <Context.Provider value={{show1, show2, show3, show4, showHide1, showHide2, showHide3, showHide4}}>
            {children}
        </Context.Provider>
    )
}

export { Context, CtxProvider }