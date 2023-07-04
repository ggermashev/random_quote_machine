import React, {useCallback, useEffect, useState} from 'react';
import styles from "./Main.module.scss"
import {getQuote} from "../../api";
import Button from "../../components/Button/Button";

const Main = () => {

    const [quote, setQuote] = useState("")
    const [author, setAuthor] = useState("")
    const [variant, setVariant] = useState(0)
    const [isLoading, setIsLoading] = useState(false)

    const colors = ["red", "orange", "yellow", "green", "blue", "purple"]

    const load = useCallback(() => {
        setIsLoading(true)
        getQuote().then(data => {
            setQuote(data[0].quote)
            setAuthor(data[0].author)
            let v = Math.round(Math.random() * 10) % 6
            setVariant(v)
            setIsLoading(false)
        })
    }, [])

    useEffect(() => {
        load()
    }, [])

    return (
        <div className={styles.main}>
            <h1>Random Quotes!</h1>
            {isLoading
                ? <p>Подождите...</p>
                : <>
                    <div className={styles.quote}>
                        <h3 style={{color: colors[variant]}}>
                            {quote}
                        </h3>
                    </div>
                    <p className={styles.author}>
                        {author}
                    </p>
                </>
            }
            <Button className={styles.btn} onClick={() => {
                load()
            }}>Новая цитата</Button>
        </div>
    );
};

export default Main;