import React from 'react';
import {useRoutes} from 'react-router-dom';
import Homeview from "../views/Homeview";
import CreateView from "../views/CreateView";
import Create from '../components/Create'

const Routers = () => {
    const element = useRoutes([
        {path: "/", element: <Homeview/>},
        {
            path: "/create", element: <Create/>,
            children: [
                {path: "view", element: <CreateView/>}
            ]
        }

    ])
    return element;
};
export default Routers;