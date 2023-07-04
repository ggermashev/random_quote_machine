import React, {useEffect, useState} from 'react';
import style from "./Main.module.scss"
import {getQuote} from "../../api";

const Main = () => {

    const [quote, setQuote] = useState("")

    useEffect(() => {
        getQuote().then(data => console.log(data))
    }, [])

    return (
        <div className={style.main}>
            <h3>Random Quotes!</h3>
            <p className={style.quote}>

            </p>
            <p className={style.author}>

            </p>
        </div>
    );
};

export default Main;