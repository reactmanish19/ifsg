import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import StepOne from '../Components/MultiStepForm/StepOne/StepOne';
import StepTwo from '../Components/MultiStepForm/StepTwo/StepTwo';

import Layout from '../Layout/Layout';
const AllRoutes = () => {
    return (
        <Router>
            <Switch>

                <Layout>
                    
                    <Route path="/" component={StepOne} exact/>
                    
                    
                    <Route path="/steptwo" component={StepTwo} />

                </Layout>
            </Switch>
        </Router >
    )
}
export default AllRoutes