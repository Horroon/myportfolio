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

const RouterComponent = () => {
    return (
        <Router>
            <div style={{ background: '#151515' }}>
                <SchemaParser schema={LoadHeaderData()} />
                <Switch>
                    <Route path="/" exact >
                        <SchemaParser schema={{ component: "HOME" }} />
                    </Route>
                    <Route path="/favorite" exact>
                        <SchemaParser schema={{ component: "FAVOURITE" }} />
                    </Route>
                    <Route path="/myprofile" exact>
                        <SchemaParser schema={{ component: "PROFILE" }} />
                    </Route>
                    <Route path="/gallery" exact>
                        <SchemaParser schema={{ component: "GALLERY" }} />
                    </Route>
                    <Route path="/contactme" exact>
                        <SchemaParser schema={{ component: "CONTACT" }} />
                    </Route>
                    <Route path="/aboutme" exact>
                        <SchemaParser schema={{ component: "ABOUTME" }} />
                    </Route>
                    <Route path="/detail" exact>
                        <SchemaParser schema={{component:"DETAIL"}} />
                    </Route>
                </Switch>
                <SchemaParser schema={LoadFooterData()} />
                <ToastContainer />
            </div>
        </Router>)
}
export default RouterComponent