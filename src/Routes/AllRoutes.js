import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ReactQueryStep from '../Components/MultiStepForm/ReactQueryStep/ReactQueryStep';

import StepOne from '../Components/MultiStepForm/StepOne/StepOne';
import StepSecond from '../Components/MultiStepForm/StepSecond/StepSecond';
import Layout from '../Layout/Layout';
import { QueryClient,QueryClientProvider } from 'react-query';
const AllRoutes = () => {
    const queryClient=new QueryClient()
    return (
        <Router>
            <Switch>
                <Layout>
                    <QueryClientProvider client={queryClient}>
                    <Route path="/" component={StepOne} exact />
                    <Route path="/stepSecond" component={StepSecond} />
                    <Route path="/reactquery" component={ReactQueryStep} />
                    </QueryClientProvider>
                </Layout>
            </Switch>
        </Router >
    )
}
export default AllRoutes