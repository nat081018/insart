export const  fetchCurrencyExchangeIifo = async () => {
    try {
        // const response = []
    fetch('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5')
     .then((response) => response.json())
     .then((res) => {
         console.log(res) 
        return this.setState({exchangeInfo: res})
    }) 

    }catch(error){
        console.log(error)
    }
}