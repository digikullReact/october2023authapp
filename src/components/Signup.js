import React ,{useState} from 'react'
import { Input ,Col, Row,Button } from 'antd';
const Signup = () => {

    const [state,setState]=useState({
        username:"",
        password:"",
        name:""

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
        console.log(state);
    }
  return (
    <>
       <div style={{marginTop:"250px"}}>
    <Row>
    <Col span={6} offset={10}><h1>Signup </h1></Col>
    </Row>
    
    <Row>
 
  <Col span={8} offset={8}> <Input placeholder="Name" name='name' onChange={handleChange} /></Col>

</Row>

<Row style={{marginTop:"30px"}}>
 
 <Col span={8} offset={8}> <Input placeholder="Username" name='username' onChange={handleChange}  /></Col>

</Row>
<Row style={{marginTop:"30px"}}>

  <Col span={8} offset={8}> <Input placeholder="Password" name='password' onChange={handleChange}  /></Col>

</Row>
<Row style={{marginTop:"30px"}}>
  <Col span={8}></Col>
  <Col span={8}> <Button style={{width:"200px"}} type="primary" onClick={handleClick}>Signup</Button></Col>
  <Col span={8}></Col>
</Row>
   
</div>
    </>
 

  )
}

export default Signup