import React from 'react'
import LoaderCss from '../Assets/Loader.Module.css';
import { useState,useEffect } from 'react';
//import { SyncLoader } from 'react-spinners';
export default function Loader() {
  const  [loading,setLoading]=useState(false)
  useEffect(()=>{
      setLoading(true)
      setTimeout(()=>{
         setLoading(false)
      },500)
  });
  return ( 
   
    <div className='preloader'>
        <div className='loader'></div>
    </div>


    //  <div className='Loader'>
    //   {
    //   loading?
    //   <SyncLoader color={'#D0021b'} loading={loading}  size={50} />
    //    :
    //    <div>Loading</div>
    //    } 
    //  </div>
  );
}
