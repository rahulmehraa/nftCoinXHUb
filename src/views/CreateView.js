import React from 'react';
import {Outlet} from 'react-router-dom';
function CreateView() {
    return(
        <React.Fragment>
            <div>This is crete view</div>
            <Outlet/>
        </React.Fragment>
    )
};
export default CreateView ;
