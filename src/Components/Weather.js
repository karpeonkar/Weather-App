import React, { Component } from 'react'
import Search from './Search'
import Result from './Result'
import Recent from './Recent'
import axios from 'axios'
 class Weather extends Component {
  constructor(props) {
    super(props)
    this.state = {
       lat:"",
       lon:"",
       weatherData:null,
       city:"",
       isSearched:false,
       recent:[],
    };
  }
  researchHandler=(lat,lon)=>{
    this.setState({weatherData:null},()=>{
      this.setState({lat,lon});
      axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${this.state.lat}&lon=${this.state.lon}&appid=4da9f1e19780307a6c3c84281b750785`)
      .then((result)=>{
          this.setState({
            city:result.data.name,
            weatherData:result.data,
          })
      })
      .catch((error)=>{
         console.log(error);
      })
    });
  }
  searchHandler=()=>
  {
    this.setState({
       
      weatherData:null,
    });
    axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${this.state.lat}&lon=${this.state.lon}&appid=4da9f1e19780307a6c3c84281b750785`)
    .then((result)=>{
        this.setState({
          city:result.data.name,
          weatherData:result.data,
        },()=>{this.addDataToRecent()})
    })
    .catch((error)=>{
       console.log(error);
    })
     
  }
  changeHandler=(event)=>
  {
      const name=event.target.name;
      if(name=="city")
      {
          this.setState({ city:event.target.value})
      }
      else if(name=="lat")
      {
        this.setState({ lat:event.target.value})
      }
      else if (name=="lon")
      {
        this.setState({ lon:event.target.value})
      }
  }
   
  addDataToRecent=()=>{
     let recent=this.state.recent;
     recent.push({
      lat:this.state.lat,
      lon:this.state.lon,
      city:this.state.city,
     });
     this.setState({recent},()=>{window.localStorage.setItem('recent',JSON.stringify(this.state.recent))});
  }
   componentDidMount(){
    const data=window.localStorage.getItem('recent');
    let recent= data==null?[]:JSON.parse(data);
     this.setState({recent});

   }
  locationHandler=(event)=>{
    this.setState({
      lat:"",
      lon:"",
      city:"",
      isSearched:true,
      weatherData:null,
    });
    if(navigator.geolocation)
    {
      navigator.geolocation.getCurrentPosition(
        (res)=>{
           this.setState({ 
            lat:res.coords.latitude,
            lon:res.coords.longitude,
          });
           setTimeout(()=>
           {
            
          axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${this.state.lat}&lon=${this.state.lon}&appid=4da9f1e19780307a6c3c84281b750785`)
          .then((result)=>{
              this.setState({
                city:result.data.name,
                weatherData:result.data,
              },()=>{this.addDataToRecent();})
          })
          .catch((error)=>{
             console.log(error);
          })
           },300);
        },
        (error)=>{
           console.log(error);
        }
      );
    }
    else
    {
      console.log("location is not supported.");
    }
  }
  render() {
    return (
      <div className='container pt-4' style={{height:'500px'}}>
        <div style={{ float: 'left', width: '10%' }}> 
        <div className='card'> 
        <Recent  research={this.researchHandler} recent={this.state.recent}/>
        </div>
        </div>
        <div style={{ float: 'left', width: '90%' }}> 
        <Search lat={this.state.lat} lon={this.state.lon} city={this.state.city} weatherData={this.state.weatherData}
         change={this.changeHandler}
         getlocation={this.locationHandler}
         search={this.searchHandler}
          ></Search>
        <Result  isSearched={this.state.isSearched} weatherData={this.state.weatherData} city={this.state.city}/> 
        {/* <Weather /> */}
        </div>

      </div>
    );
  }
}


export default Weather