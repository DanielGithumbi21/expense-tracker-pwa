import axios from "axios"
import { Api } from "../Api"

const getAggregateExpenses = async (setIsLoading:any,setAggregateExpenses:any,jwt:String) => {
    setIsLoading(true)
    try {
       await axios.get(`${Api}/expenses/aggregate`,{
        headers:{
            Authorization:`Bearer ${jwt}` 
        }
       })
       .then((data) => {
        setAggregateExpenses(data.data)
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
const getExpenses = async (setIsLoading:any,setExpenses:any,jwt:String) => {
    setIsLoading(true)
    try {
       await axios.get(`${Api}/expenses`,{
        headers:{
            Authorization:`Bearer ${jwt}` 
        }
       })
       .then((data) => {
        setExpenses(data.data)
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

export {getAggregateExpenses,getExpenses}