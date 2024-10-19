import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { privetRoutes, publicRoutes } from "../router/route";
import Login from "../pages/Login";
import Posts from "../pages/Posts";
import { AuthContext } from "../context";

const AppRouter = () => {
  const {isAuth,setIsAuth} = useContext(AuthContext)
  return (
    isAuth
      ?
      <Routes>
        {privetRoutes.map(route =>
          <Route element={route.element} path={route.path} key={route.path}/>
        )}
        <Route path='/*' element={<Posts/>} />
      </Routes>
      :
      <Routes>
        {publicRoutes.map(route =>
          <Route element={route.element} path={route.path} key={route.path}/>
        )}
        <Route path='/*' element={<Login/>} />
      </Routes>
  )
};

export default AppRouter;
