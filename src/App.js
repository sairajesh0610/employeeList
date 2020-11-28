import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route,Link,Redirect,Switch,HashRouter } from "react-router-dom";
import{appStore} from "./reducers/Store";
import {Provider} from 'react-redux';
import {employeeList} from './utils/Constants';
import HomePage from './containers/HomePage';
import LoginPage from './containers/LoginPage';



export default class App extends React.Component{
  constructor(props){
    super(props);
    appStore.dispatch({type:'EMPLOYEE_LIST',employeeList:employeeList.user});
  }

  componentDidMount(){
    
  }

  
  render(){
    return (
      <Provider store={appStore}>
        <Router  basename={'/'}>
          <Switch>
            <Route exact path="/" handler={App} component={LoginPage} />
            <Route exact path="/home" component={HomePage} />
          </Switch>
       
        </Router>
      </Provider>
    )
  }

}
