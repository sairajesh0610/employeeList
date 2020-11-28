import React, { Component, Fragment } from 'react';
import { connect } from "react-redux";
import { Form,Card, Input, Button, message } from 'antd';
import {
    UserOutlined
} from '@ant-design/icons';

import './styles/HomePage.css';

import {isNotEmpty,emailValidation} from '../utils/Utils';

import {logindetls} from '../utils/Constants';


class LoginPage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            showSpinner: false,
            username: '',
            password: '',

        }
    }
    componentDidMount() {


    }




    submitLogin = () => {
    if (!isNotEmpty(this.state.username)) {
            message.error('Please enter Username', 1.5);
      } else if(!emailValidation(this.state.username)){
            message.error('The Username entered is invalid . Please check and try again ', 1.5);
      }else if(!isNotEmpty(this.state.password)){
            message.error('Please enter password', 1.5);
      }else{
        if (this.state.username == logindetls[0].username && this.state.password == logindetls[0].password) {
            this.props.history.replace('/home')
          }else{
            message.error('Login deatils are invalid . Please check and try again ', 1.5);
          }

      }
    }









    render() {
        const { username, password, showSpinner } = this.state;
    
        return (
            <Fragment>
                <div className='login-item'>
                    <Card style={{ width: 400 }}>
                        <h2 style={{ textAlign: 'center' }}>Login</h2>
                        <div>
                            <Input size="large" placeholder="Username"
                                style={{ marginBottom: 8, borderRadius: 4, }}
                                value={username}
                                onChange={e => {
                                    this.setState({
                                        username: e.target.value
                                    });
                                }}
                                prefix={<UserOutlined />} />
                            <Input.Password size="large" placeholder="Password"
                                value={password}
                                onChange={e => {
                                    this.setState({
                                        password: e.target.value
                                    });
                                }}
                                style={{ marginBottom: 8, borderRadius: 4, }}
                            />
                            <Button type="primary"
                                loading={showSpinner}
                                onClick={this.submitLogin.bind(this)}
                                style={{
                                    borderRadius: 4,
                                    fontWeight: '500',
                                    height: 40
                                }}
                                block>
                                Login
                                    </Button>
                        </div>
                    </Card>
                </div>



            </Fragment>




        )
    }
}

function mapStateToProps(state) {
    return {
     
    }
}
function mapDispatchToProps(dispatch) {
    return {
        
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);