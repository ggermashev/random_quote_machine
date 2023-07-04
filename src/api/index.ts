import axios from "axios"
import {API_KEY} from "./key";

async function getQuote() {
   const response = await fetch("https://api.api-ninjas.com/v1/quotes",{
      headers: {
         'X-Api-Key': API_KEY
      }
   })
   const data = await response.json()
   return data
}


export {getQuote}