import React,{useEffect,useState} from 'react'
import axios  from 'axios'; // es6 imports

const Api="http://ubuntu@ec2-13-58-234-56.us-east-2.compute.amazonaws.com:8080"

const Dashboard = () => {
    const [state,setState]=useState([]);


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
     {
        state.map(ele=>(
            <li>{ele.name}</li>
        ))
     }


    </div>
  )
}

export default Dashboard