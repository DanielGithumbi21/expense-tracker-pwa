import axios from "axios";
import { Api } from "../Api";

interface Data {
    name:String,
    email:String,
    password:String
}
interface loginData {
    email:String,
    password:String
}
const createAccount = async (data:Data,setIsLoading:any,setErrors:any,navigate:any,) => {
    try {
        setIsLoading(true)
        await axios.post(`${Api}/register`,data)
        .then((data) => {
            setIsLoading(false)
            console.log(data)
        })
        .catch((error) => {
            setIsLoading(false)
            console.error(error)
        })
    } catch (error) {
        console.error(error)
    }
}
const login = async (data:loginData,setIsLoading:any,setErrors:any,navigate:any,) => {
    try {
        setIsLoading(true)
        await axios.post(`${Api}/login`,data)
        .then((data) => {
            setIsLoading(false)
            console.log(data)
        })
        .catch((error) => {
            setIsLoading(false)
            console.error(error)
        })
    } catch (error) {
        console.error(error)
    }
}



export {createAccount,login}