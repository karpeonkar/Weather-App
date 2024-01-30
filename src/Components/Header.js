import React from 'react'
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css'; 
export default function  
() {
  return (
    <div> 
        <nav className='navbar navbar-expand-sm navbar-dark bg-dark'>
        <div className='container'>
            <Link className='navbar-brand' to='/'>
                Weather App <i className='fa fa-cloud'></i>
            </Link>
           <button
             className=' navbar-toggler d-lg-none'
             type='button'
             data-toggle='collapse'
             data-target='#collapsibleNavId'
             aria-controls='collapsibleNavId'
             aria-expanded='false'
             aria-label='Toggle-navigation'
             >
             <span className='navbar-toggler-icon'></span>
             </button>
        </div>
        <div className='collapse navbar-collapse' id='collapsibleNavId'>
            <ul className='navbar-nav ml-auto mt-2 mt-lg-0'>
                <li className='nav-item active'>
                    <Link className='nav-link' to='/'>
                        Home  <i className='fa fa-home'></i>
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link className='nav-link' to='/weather'>
                        Weather  <i className='fa fa-cloud'></i>
                    </Link>
                </li>
            </ul>

        </div>

     </ nav>
    </div>
  );
}
