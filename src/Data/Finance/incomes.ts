import axios from "axios"
import { Api } from "../Api"

const getAggregateIncomes = async (setIsLoading:any,setAggregateIncomes:any,jwt:String) => {
    setIsLoading(true)
    try {
       await axios.get(`${Api}/incomes/aggregate`,{
        headers:{
            Authorization:`Bearer ${jwt}` 
        }
       })
       .then((data) => {
        setAggregateIncomes(data.data)
        setIsLoading(false)
       })
       .catch((error) => {
        console.error(error)
        setIsLoading(false)
       })
    } catch (error) {
        console.error(error)
    }
}
const getIncomesByCategory = async (setIsLoading:any,setIncomeData:any,jwt:String) => {
    setIsLoading(true)
    try {
       await axios.get(`${Api}/incomes/income-data`,{
        headers:{
            Authorization:`Bearer ${jwt}` 
        }
       })
       .then((data) => {
        setIncomeData(data.data)
        setIsLoading(false)
       })
       .catch((error) => {
        console.error(error)
        setIsLoading(false)
       })
    } catch (error) {
        console.error(error)
    }
}

export {getAggregateIncomes,getIncomesByCategory}