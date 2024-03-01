import React,{useEffect,useState} from 'react'
import axios  from 'axios'; // es6 imports
import { Button, Space, Table, Tag } from 'antd';
import { useNavigate } from 'react-router-dom';

const Api="http://ubuntu@ec2-13-58-234-56.us-east-2.compute.amazonaws.com:8080"

const Dashboard = () => {
    const [state,setState]=useState([]);

   const navigate= useNavigate();
    const logout=()=>{
      localStorage.removeItem("token");

      navigate("/login");

    }

    const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
          render: (text) => <a>{text}</a>,
        },
        {
          title: 'Username',
          dataIndex: 'username',
          key: 'username',
        },
        {
          title: 'Password',
          dataIndex: 'password',
          key: 'password',
        },
        
      ];
     

    useEffect(()=>{

        // this shows the mounting behaviours

        axios.get(Api).then(res=>{
            console.log(res.data);
            setState(res.data.data)
           
      
          }).catch(err=>{
            console.log(err);
          })

    },[])

  return (
    <div>
  <Table columns={columns} dataSource={state} />;


  <Button style={{width:"200px"}} type="primary"  onClick={logout}>Logout</Button>


    </div>
  )
}

export default Dashboard