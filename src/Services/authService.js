import axios from 'axios';
import {setAuthorizationToken} from '../Helpers/setAuthorization'

const login = (email, password) => {
   // console.log('olacak')
    const user = {email:email,password:password}

   
    return axios.post('https://projectone.proxolab.com/api/auth/login', user)
        .then(response => {
           
            //eğer kullanıcı bulunursa (status = 'success') 
            if (response.data.status === 'success') {
              //  console.log(response.data.status)
                const { token } = response.data.authorization.token;
                localStorage.setItem("token", token);
                let user ={}
                user= response.data.user;
                localStorage.setItem("userName",user.name);
                setAuthorizationToken(token);
               // console.log(token);
               // console.log(user);
                
                
            }
            return response.data.user;
        })
        .catch(err => console.log(err));
}

const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem('userName')
    setAuthorizationToken(false);
}

const auth = {
    login, logout
}

export default  auth ;