import axios from "axios"

async function getQuote() {
   const response = await fetch("https://api.api-ninjas.com/v1/quotes",{
      headers: {
         'X-Api-Key': 'EW5rm83QsJTUUMxUndBgjw==N8P44wgLCBv87MjF'
      }
   })
   const data = await response.json()
   return data
}


export {getQuote}