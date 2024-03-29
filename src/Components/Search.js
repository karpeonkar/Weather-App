import { search } from 'fontawesome';
import React from 'react'

export default function  
(props) {
  return (
    <div className='row'>
        <div className='col-lg-5'>
            <div className='form-group'>
                <label htmlFor=''>Type City Name</label>
                <input
                type='text'
                className='form-control'
                name='city'
                value={props.city}
                onChange={props.change}
                id='city'
                aria-describedby='helpId'
                placeholder=''
                />
            </div>
            <div className='col-lg-1 text-center'>
                <label htmlFor=''></label>
                <h5>Or</h5>
            </div>
            <div className='col-lg-15'>
                <div className='form-group'>
                    <label htmlFor=''>Get Co-ordinate</label>
                    <button className='btn fa fa-crosshairs' onClick={props.getlocation}></button>
                    <div className='row'>
                        <div className='bg-dark text-white rounded pt-1 pl-1'>Lat:</div>
                        <input 
                        type='number'
                        step='any'
                        className='form-control col mr-1'
                        name='lat'
                        value={props.lat}
                        onChange={props.change}
                        id='lat'
                        aria-describedby='helpId'
                        placeholder=''
                        />
                        <div className='bg-dark text-white rounded pt-1 pr-1'>Lon:</div>
                        <input
                        type='number'
                        step='any'
                        className='form-control col'
                        name='lon'
                        value={props.lon}
                        onChange={props.change}
                        id='lon'
                        aria-describedby='helpId'
                        placeholder=''
                        />
                    </div>

                </div>

            </div>
            <div className='col-lg-1'>
                <label htmlFor='' onClick={props.search}>Search</label>
                <button onClick={props.search} className='btn btn-primary fa fa-search'></button>

            </div>
            
        </div> 

    </div>
  );
}
