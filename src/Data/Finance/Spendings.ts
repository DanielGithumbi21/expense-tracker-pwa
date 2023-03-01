import { Api } from "../Api"
import { reqInstance, reqInstance2 } from "../Auth/AuthHelper"


const createSpending = async (data:any,setIsLoading:any,navigate:any) => {
    reqInstance2.post(`${Api}/spendings`,data)
    .then(() => {
        setIsLoading(false)
        navigate("/")
    })
    .catch((error) => {
        console.log(error)
    })
}

export {
    createSpending
}