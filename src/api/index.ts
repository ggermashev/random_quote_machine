import axios from "axios"

async function getQuote() {
    const response = await fetch("https://api.forismatic.com/api/1.0/?method=getQuote&key=random&format=jsonp&lang=ru&jsonp=?", {
    })
    console.log(response)
    return response
}


export {getQuote}