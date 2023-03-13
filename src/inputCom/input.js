import './input.css';
import { useContext, useEffect } from 'react';
import { loginContext } from '../App';

function Input() {

    const { pass, enterText, inputRef } = useContext(loginContext);


    return (

        <div className='input-form'>
            <label>Enter your code to unlock your present</label>
            <input type="text" name="text" className="input" placeholder="Your code here!" value={pass} onChange={enterText} ref={inputRef} />
        </div>

    );
};

export default Input;