import { useEffect, useState } from "react";
import './loader.css';
import './main.css';
import WishPhrase from "../wish/WishPhrase"

function Main() {

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, [])


    return (
        <div className="container">
            {
                loading ?
                    <div class="loader"><div></div></div>
                    :
                    <WishPhrase/>
            }
        </div>
    )
}

export default Main;