import axios from "axios"
const url = "http://localhost:8080"


const registerUser = async (post:any,setIsLoading:any,navigate:any,setErrors:any,setUser:any) => {
    setIsLoading(true)
    await axios.post(`${url}/register`,post)
    .then((data) => {
        setIsLoading(false)
        setUser(data.data);
        navigate("/spendings")
    })
    .catch((error) => {
        setIsLoading(false)
        setErrors(error.response.data.Error)
    })
}

const loginUser = async (post:any,setIsLoading:any,navigate:any,setErrors:any,setUser:any) => {
    setIsLoading(true)
    await axios.post(`${url}/login`,post)
    .then((data) => {
        console.log(data)
        setIsLoading(false)
        setUser(data.data);
    })
    .catch((error) => {
        setIsLoading(false)
        setErrors(error.response.data.Error)
    })
}

export {
    url,
    registerUser,
    loginUser
}