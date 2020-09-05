const  getDateLocal =  (currentDate) => { 
    const date = new Date()
    const getMonths = () => {
  
    let month = date.getMonth() + 1; // месяц 1-12
    if (month < 10) month = '0' + month;
    return month
    }
     currentDate  = `${date.getDate()}/${getMonths()}/${date.getFullYear()}`
    console.log(currentDate)
    return currentDate
  }

  export default  getDateLocal