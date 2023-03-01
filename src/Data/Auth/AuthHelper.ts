const user = JSON.parse(localStorage.getItem('user')!);

import axios,{AxiosInstance} from "axios"


const instance =  () => {
  if (user !== null) {
    console.log(user.jwt)
    return user.jwt
  }
}


const reqInstance:AxiosInstance = axios.create({

    headers: {
      Authorization: `Bearer ${instance()}`,
      "Content-Type": "multipart/form-data",
   
  }
  
}
)

const reqInstance2:AxiosInstance = axios.create({

  headers: {
    Authorization: `Bearer ${instance()}` 
}

}
)

export { reqInstance,reqInstance2,user };