import React from "react";
import { useRoutes } from "react-router-dom";
import HomeScreen from "../pages/HomeScreen";
import Tela2Screen from "../pages/Tela2Screen";
import Orders from "../pages/Orders";
import Profile from "../pages/Profile";
import { RequireAuth } from "../RequireAuth";

const MainRoutes = ()=>{
    return useRoutes([
        {path: '/', element: <HomeScreen    />},
        {path: '/tela2/:nome', element: <Tela2Screen    />},
        {path: '/orders', element: <Orders    />},
        {path: '/profile', element: 
            <RequireAuth>
                <Profile />
            </RequireAuth>
        },
])};

export default MainRoutes;