import React, { useContext } from "react"
import MyInput from "../components/UI/input/MyInput";
import MyBtn from '../components/UI/button/MyBtn';
import { AuthContext } from "../context";

const Login = () => {
    const {isAuth,setIsAuth} = useContext(AuthContext)
    const login = event => {
        event.preventDefault();
        setIsAuth(true);
        localStorage.setItem('auth','true')
    }
    return (
    <div>
        <h1>LOGIN IN</h1>
        <form onSubmit={login}>
            <MyInput type="text" placeholder="Entry login"/>
            <MyInput type="password" placeholder="Entry password"/>
            <MyBtn>LOGIN</MyBtn>
        </form>
    </div>
  )
};

export default Login;
