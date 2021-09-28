import './App.css';
import React, { useEffect, useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import Typography from '@mui/material/Typography';


function App() {
  const axios = require('axios');
  const [city,setCity] = useState("Delhi");
  const [data, setData] = useState({ main:{
    temp:"",
  },
  name:"",
  weather:[{
   
  }]
});

useEffect(()=>{
  getData();
},[]);

async function getData(){
   const result = await  axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=879af3259cc77330dbb2e3e4a08cfc1e`)
   console.log(result);
   setData(result.data);
   console.log(data);    
} 

const update =(event)=>{
  setCity(event.target.value);
}

const something=(event)=> {
  if (event.keyCode === 13) {
    getData();
      console.log('enter')
  }
}
  return ( 
  <div className="start"> 
      <div className="App">
        <h1 className="name" >Weather App</h1> 
        <TextField id="standard-basic" 
        className="box"
              type='text'
              placeholder='Search your City' 
              value={city} 
              onChange={update}
              onKeyDown={(e)=>something(e)} 
              />
              <br></br>
              <Button  variant="contained" color="primary" onClick={getData}  style={{marginTop:"8px"}}>Results</Button>
    
          
             <Typography sx={{ fontSize: 60 , textAlign:'left', color:"white"}}   gutterBottom> {data.main.temp} </Typography>
             <Typography sx={{ fontSize: 36 , textAlign:'left', color:"white"}}   gutterBottom>{data.name} </Typography>
              <Typography sx={{ fontSize: 30 , textAlign:'left', color:"#D4D4CA"}}   gutterBottom>state : {data.weather[0].description} </Typography>
             <Typography sx={{ fontSize: 30 , textAlign:'left', color:"#D4D4CA"}}   gutterBottom> Max : {data.main.feels_like} </Typography>
             <Typography sx={{ fontSize: 30 , textAlign:'left', color:"#D4D4CA"}}   gutterBottom>Min : {data.main.temp} </Typography>
       </div>
    <div className='logo'>
        
       </div> 
 </div>   
  );
}

export default App;
