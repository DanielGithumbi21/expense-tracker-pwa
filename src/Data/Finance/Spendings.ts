import axios from "axios"
import { Api } from "../Api"


const createSpending = async (data:any,setIsLoading:any,navigate:any,jwt:any) => {
    setIsLoading(true)
    console.log(jwt)
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

export {
    createSpending
}