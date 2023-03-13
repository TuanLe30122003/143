import Login from "./loginCom/login";
import { useState, useRef, createContext, useEffect } from "react";
import Main from "./main/main";
import React from "react";


export const loginContext = createContext(null);

function App() {

    const passCode = '123456';

    const [pass, setPass] = useState('');

    const [status, setStatus] = useState('fail');

    const enterText = (e) => {
        setPass(e.target.value)
        // console.log(pass);
    }

    const inputRef = useRef(null);
    const errorRef = useRef(null);

    const checkPass = () => {

        if (pass === passCode) {
            setStatus('success');
        }
        else {
            errorRef.current.classList.remove('hidden');
        }

        inputRef.current.focus();

        setPass('');
    }

    // add event listener to check if user press enter
    useEffect(() => {
        const handleEnter = (e) => {
            if (e.key === 'Enter') {
                checkPass();
            }
        }
    })

    return (
        <loginContext.Provider value={{ pass, setPass, enterText, inputRef, checkPass, status, errorRef }}>
            {status === "success" ?
                <Main></Main>
                :
                <Login></Login>
            }
        </loginContext.Provider>
    )
}

export default App;