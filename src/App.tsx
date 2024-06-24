import React from 'react';
import {Auth} from "./pages/Auth/Auth";
import {ConfigProvider, theme} from "antd";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Home} from "./pages/Home/Home";
import {DigiProvider} from "./context/DigiContext";
import {Details} from "./pages/Details/Details";

const router = createBrowserRouter([
    {
        path: "/home",
        element: <Home/>
    },

    {
        path: "details/:id",
        element: <Details/>
    },
    {
        path: "/",
        element: <Auth/>
    },
])

function App() {
    return (
        <div className="App">
            <ConfigProvider theme={{algorithm: theme.darkAlgorithm}}>
                <DigiProvider>
                    <RouterProvider router={router}/>
                </DigiProvider>
            </ConfigProvider>
        </div>
    );
}

export default App;
