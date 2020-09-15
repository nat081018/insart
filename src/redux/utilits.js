export const  getDateLocal =  (currentDate) => { 
    const date = new Date()
    const getMonths = () => {
  
    let month = date.getMonth() + 1; // месяц 1-12
    if (month < 10) month = '0' + month;
    return month
    }
     currentDate  = `${date.getDate()}/${getMonths()}/${date.getFullYear()}`
    return currentDate
  }

// added id, fixed number 
const fixNum = (str) => {
  let parsStr = parseFloat(str)
  return parsStr
}


export const   fetchCurrencyExchange = async () => {
  try {
  const response = await fetch('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5')
  const data = await response.json()

  const fixedData = await data.map(({buy, sale, ...rest}) =>({
    ...rest,
    buy: fixNum(buy) ,
    sale: fixNum(sale),
    id: String(Math.random())
  }))
  console.log(fixedData) 
  return fixedData

  }catch(error){
      console.log(error)
  }
}
//////

export  const newExchangeValue = (currentID, newVal) => {
  
  console.log(`экшин сработал ${newVal}`)
  const res = {
    _id: currentID,
    newVal: newVal
  }
  console.log(res)
  return res

}

export  const newExchangeValueSale = (currentID, newVal) => {
  
  console.log(`экшин сработал ${newVal}`)
  const res = {
    _id: currentID,
    newVal: newVal
  }
  console.log(res)
  return res

}



