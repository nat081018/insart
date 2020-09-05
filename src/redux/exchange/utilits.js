export const  fetchCurrencyExchange = async () => {
    try {
        // const response = []
    const response = await fetch('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5')
    const data = await response.json()
    console.log(data)
    return data
     
    }catch(error){
        console.log(error)
    }
}