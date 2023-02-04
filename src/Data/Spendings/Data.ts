import { url } from "../Auth/Auth";
import { reqInstance } from "../Auth/AuthHelper";
const newUrl = `${url}/spendings`

const createSpending = async (post:any,setIsLoading:any,navigate:any) => {
    try {
        setIsLoading(true)
        await reqInstance.post(newUrl,post)
        .then(() => {
            navigate("/")
        })
        
    } catch (error) {
        console.error(error)
    }
}

export {
    createSpending
}