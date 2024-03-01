import React,{useState} from 'react'
import { Input ,Col, Row,Button } from 'antd';
import axios  from 'axios'; // es6 imports
import { useNavigate } from 'react-router-dom';

const Api="http://ubuntu@ec2-13-58-234-56.us-east-2.compute.amazonaws.com:8080/login"

const Login = () => {
  const navigate=useNavigate();  // is used for dynamic routing

  const [state,setState]=useState({
    username:"",
    password:"",

})

const handleChange=(event)=>{
   
   // console.log(event.target.name);
    let dataName=event.target.name
    let dataValue=event.target.value
    setState({  
        ...state,
        [dataName]:event.target.value
      })

}

const handleClick=()=>{
    // we have to make the api call 
    axios.post(Api,state).then(res=>{
      console.log(res.data);
      if (res.data.token){
         // we will redirect to the dahsboard
        // we will save the token as well in the localstorage
        localStorage.setItem("token",res.data.token)
         navigate("/dashboard");
      }else{
        alert("Incorrect username or Password");
      }

    }).catch(err=>{
      console.log(err);
    })
}
  return (
    <div style={{marginTop:"250px"}}>
        <Row>
        <Col span={6} offset={10}><h1>Please Login Here !!!</h1></Col>
        </Row>
        
        <Row>
     
      <Col span={8} offset={8}> <Input placeholder="Username"  name='username' onChange={handleChange}/></Col>
    
    </Row>
    <Row style={{marginTop:"30px"}}>
   
      <Col span={8} offset={8}> <Input placeholder="Password" name='password' onChange={handleChange}/></Col>
   
    </Row>
    <Row style={{marginTop:"30px"}}>
      <Col span={8}></Col>
      <Col span={8}> <Button style={{width:"200px"}} type="primary"  onClick={handleClick}>Login</Button></Col>
      <Col span={8}></Col>
    </Row>
       
    </div>
  )
}

export default Login