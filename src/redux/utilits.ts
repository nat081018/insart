
export const  getDateLocal =  () : string => { 
    const date = new Date()
    const getMonths = () => {
  
    let month: number | string = date.getMonth() + 1; // месяц 1-12
    if (month < 10) month = '0' + month;
    return month
    }
    
    const  currentDate: string  = `${date.getDate()}/${getMonths()}/${date.getFullYear()}`

    return currentDate
  }

// added id, fixed number 

  const fixNum = (str: any) => {
  let parsStr = parseFloat(str)
  return parsStr
}

interface FetchData {
  buy: number | string,
  sale: number | string,
  id?: string
}

// const response = fetch('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5')
// .then((res) => res.json())
// .then((res) => console.log(res) )
// console.log(response)


export const fetchCurrencyExchange = async () => {
  try {
  const response = await fetch('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5')
  const data = await response.json()

  const fixedData = data.map(({buy, sale, ...rest} : FetchData) =>({
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

let res2 = fetchCurrencyExchange()
let res = fetchCurrencyExchange()
res.then((res) => console.log(res))

console.log(res2)


export  const newExchangeValue = (currentID: string, newVal: number): object => {
  
  console.log(`экшин сработал ${newVal}`)
  const res = {
    _id: currentID,
    newVal: newVal
  }
  console.log(res)
  return res

}

export  const newExchangeValueSale = (currentID: string, newVal: number): object  => {
  
  console.log(`экшин сработал ${newVal}`)

  const res = {
    _id: currentID,
    newVal: newVal
  }
  console.log(res)
  return res

}


