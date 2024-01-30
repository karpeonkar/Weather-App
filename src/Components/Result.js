import React from 'react'
import Loader from './Loader';
export default function (props) {
 const {weatherData:data}=props;
 function kToC(k){
     return (k-273.15).toFixed(2)+ "° C";
 }
 function getTheDate(stamp){
   const date= new Date(stamp*1000);
   return date.toLocaleTimeString();
 }
 let showOnPage;
 if(data===null)
 {
   if(props.isSearched===true)
   {
  showOnPage= (<><div><Loader /></div></>)
   }
  else
  {
   showOnPage=(  <>
     <div className='container'></div>
     <h1 className='text-center'>Please Search the city</h1>
     </>)
  }
 }
 else
 {
  showOnPage=<div className='row'>
  <div className='col'>
      <div className='card border-primary'>
          <div className='card-body'>
              <h4 className='card-title'>
               <img src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`} alt='' />
                {data.name} ({kToC(data.main.temp) }) {data.weather[0].description}
                 <span className='pl-2'>{data.weather[0].des}</span>                 
              </h4>
                
            <div className='row'>
              <div className='col'>
                <div className='row'>
                  <table className='table'>
                    <tbody>
                      <tr>
                        <th>Feels like</th>
                        <td>{kToC(data.main.feels_like)}</td>
                      </tr>
                      <tr>
                        <th>Min Temp</th>
                        <td>{kToC(data.main.temp_min)}</td>
                      </tr>
                      <tr>
                        <th>Max Temp</th>
                        <td>{kToC(data.main.temp_max)}</td>
                      </tr>
                      <tr>
                        <th>Sun Rise</th>
                        <td>{getTheDate(data.sys.sunrise)}</td>
                      </tr>
                      <tr>
                        <th>Sun Set</th>
                        <td>{getTheDate(data.sys.sunset)}</td>
                      </tr>
                    </tbody>
                  </table>

                </div>
              </div>
            </div>
          </div>
      </div>
  </div>
</div>
 }
   return (
       
      <> 
       
      {showOnPage}
      </>
       
  );
}
