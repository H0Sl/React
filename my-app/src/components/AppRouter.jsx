import React from "react";
import About from "../pages/About";
import Posts from "../pages/Posts";
import { Navigate, Route, Routes } from "react-router-dom";

const AppRouter = () => {
  return (
    <Routes>
        <Route path='/about' element={<About />} />
        <Route path='/posts' element={<Posts />} />
        <Route path='/*' element={<Navigate to='/posts' replace/>} />
    </Routes>
  )
};

export default AppRouter;
