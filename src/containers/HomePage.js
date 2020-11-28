import React,{Component,Fragment} from 'react';
import {connect} from "react-redux";
import {Table, Layout } from 'antd';

import {logindetls} from '../utils/Constants';

import './styles/HomePage.css';

const { Header, Footer, Sider, Content } = Layout;

const columns = [
    {
        title: 'Id',
        dataIndex: 'id',
        key: 'id'
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name'
    },
    {
        title: 'Email',
        dataIndex: 'email',
        key: 'email'
    },
    {
        title: 'Phone number',
        dataIndex: 'phoneNo',
        key: 'phoneNo'
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Gender',
      dataIndex: 'gender',
      key: 'gender',
    }
  ];

class HomePage extends Component {

    constructor(props){
        super(props)
        this.state = {
     
            
        }
    }
    componentDidMount() {
        window.scrollTo(0, 0)
      
    }

  

 

   

 
  
   

    
    
   
    render(){
        return(
            <Fragment>

            <Layout>
                <Header>
                    <h2 style={{color:'#fff'}}>Employee Table</h2>
                </Header>
                <Content style={{marginLeft:20,marginRight:20}}>
                    <Table columns={columns} dataSource={this.props.employeeList} />
                </Content>
             
                </Layout>
               
               
                   
            </Fragment>
          
                
       

        )
    }
}

function mapStateToProps(state) {
    return {
        employeeList:state.employeeList,
    }
}
function mapDispatchToProps(dispatch){
    return {
       
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(HomePage);