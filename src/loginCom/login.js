import Input from "../inputCom/input";
import './login.css';
import { useState, useRef, createContext, useContext } from "react";
import { loginContext } from "../App";

function Login() {

    const {checkPass, errorRef} = useContext(loginContext);

    return (
        <section>
            <div className="input-phrase">
                <Input></Input>
                <p className="errorMes hidden" ref={errorRef}>! Wrong code</p>
                <button className="button" onClick={checkPass}>
                    <span className="button_lg">
                        <span className="button_sl"></span>
                        <span className="button_text">Check Code!</span>
                    </span>
                </button>
            </div>
        </section>
    )
}

export default Login;