import React from 'react'
import { Input ,Col, Row,Button } from 'antd';
const Login = () => {
  return (
    <div style={{marginTop:"250px"}}>
        <Row>
        <Col span={6} offset={10}><h1>Please Login Here !!!</h1></Col>
        </Row>
        
        <Row>
     
      <Col span={8} offset={8}> <Input placeholder="Username" /></Col>
    
    </Row>
    <Row style={{marginTop:"30px"}}>
   
      <Col span={8} offset={8}> <Input placeholder="Password" /></Col>
   
    </Row>
    <Row style={{marginTop:"30px"}}>
      <Col span={8}></Col>
      <Col span={8}> <Button style={{width:"200px"}} type="primary">Login</Button></Col>
      <Col span={8}></Col>
    </Row>
       
    </div>
  )
}

export default Login