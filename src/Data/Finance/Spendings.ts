import axios from "axios"
import { Api } from "../Api"


const createSpending = async (data:any,setIsLoading:any,navigate:any,jwt:any) => {
    setIsLoading(true)
    axios.post(`${Api}/spendings`,data, {
        headers:{
            Authorization:`Bearer ${jwt}`
        }
    })
    .then(() => {
        setIsLoading(false)
        navigate("/")
    })
    .catch((error) => {
        console.log(error)
        setIsLoading(false)
    })
}

const getSpending = async (setIsLoading:any,setSpendings:any,jwt:String) => {
    setIsLoading(true)
    try {
       await axios.get(`${Api}/spendings`,{
        headers:{
            Authorization:`Bearer ${jwt}` 
        }
       })
       .then((data) => {
        setSpendings(data.data)
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

export {
    createSpending,getSpending
}