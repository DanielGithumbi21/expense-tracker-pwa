import axios,{AxiosInstance} from "axios"
const user = JSON.parse(localStorage.getItem('user')!);

  const instance =  () => {
    if (user !== null && user !== undefined) {
      return user.jwt
    }
  }
  
  
  const reqInstance:AxiosInstance = axios.create({
  
      headers: {
        Authorization: `Bearer ${instance()}`,
     
    }
    
  }
  )




export { reqInstance };