import { Api } from "../Api"
import { reqInstance, reqInstance2 } from "../Auth/AuthHelper"


const createSpending = async (data:any,setIsLoading:any,setErrors:any,navigate:any) => {
    reqInstance2.post(`${Api}/spendings`)
    .then((data) => {
        console.log(data)
    })
    .catch((error) => {
        console.log(error)
    })
}

export {
    createSpending
}