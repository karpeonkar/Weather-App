import React from 'react'

export default function  (props) {
    let data;
    if(props.recent===null)
    {
        data=""
    }
    else
    {
        data=props.recent.map(
            (recentData,id)=>{
             return <li onClick={()=>props.research(recentData.lat,recentData.lon)} key={id}>{recentData.city}</li>  
            })
    }
  return (
    <div className='recent-box'> 
       <h3 >Recent</h3>
       <ul className='text-left list-unstyled'>{data}</ul>
    </div>
  );
}
