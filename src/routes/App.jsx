import React from "react";
import {BrowserRouter, Switch,Route} from 'react-router-dom'
import Layout from "../containers/Layout";
import Login from "../containers/Login";
import RecoveryPassword from "../containers/RecoveryPassword";
import '../styles/global.css';

const App =()=>{
    return(
        <BrowserRouter>
        <Switch>
            <Layout>
                <Route exact path="/" component={Home}/>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/recovery-password" component={RecoveryPassword}/>

            </Layout>
        </Switch>
        <Layout>
            <Login/>
            <RecoveryPassword/>
        </Layout>
        </BrowserRouter>
    )
}
export default App;

