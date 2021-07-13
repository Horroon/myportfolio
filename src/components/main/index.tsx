import React from 'react';
import SchemaParser from '../../services/schemaParser';
import {LoadHeaderData, LoadFooterData} from '../../database/index';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import {PATHS} from '../paths';

interface RightPathInterface {
    path: string,
    schema: any
}
const RightPath = ({path = '/', schema = {component: "HOME"}})=>{
    return(
    <Route path={path} exact >
        <SchemaParser schema={{...schema}} />
    </Route>)
    }

const RouterComponent = () =>(
        <Router>
            <div style={{ background: '#151515' }}>
                <SchemaParser schema={LoadHeaderData()} />
                    <div style={{minHeight: '100vh'}}>
                        {PATHS.map((path:RightPathInterface)=><RightPath path={path.path} schema={path.schema} />)}
                    </div>
                <SchemaParser schema={LoadFooterData()} />
                <ToastContainer />
            </div>
        </Router>)
export default RouterComponent