import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";

// import MultiStepForm from "../Components/MultiStepForm/MultiStepForm"
import StepOne from '../Components/MultiStepForm/StepOne/StepOne';
import StepSecond from '../Components/MultiStepForm/StepSecond/StepSecond';
import Layout from '../Layout/Layout';


const AllRoutes = () => {
    return (
        <Router>
            <Switch>
                <Layout>
                    <Route path="/" component={StepOne} exact />
                    <Route path="/stepSecond" component={StepSecond} />
                </Layout>
            </Switch>
        </Router >
    )
}
export default AllRoutes