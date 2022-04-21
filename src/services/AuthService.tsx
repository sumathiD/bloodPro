import axios from "axios"

const API_URL = "http://localhost:3000";

const signup = (username: any,password: any) => {
    return axios.post(`${API_URL}/user/register`, {
            username,
            password,
          })
          .then((response: any) => {
            console.log('signup2',response.data);
            return response.data;
          });
}

const login = (username: any,password: any ) => {
    return axios.post(`${API_URL}/auth/login`, {
        username,
        password,
    })
    .then((res: any) => {
        if (res.data.access_token) {
            localStorage.setItem('user', res.data.access_token);
            // console.log('login response data :', res.data);
            // console.log('login jwt :', res.data.access_token);
        }
        return res.data;
    })
}

// const logout = () => {
//     localStorage.removeItem("user");
// }

// const getCurrentUser = () => {
//     // return JSON.parse(localStorage.getItem("user"));
//     return localStorage.getItem("user");
// }

const AuthServices = {
    signup,
    login,
    // logout,
    // getCurrentUser,
};

export default AuthServices;
