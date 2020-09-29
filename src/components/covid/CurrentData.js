import React from 'react'
import{ connect } from 'react-redux'
import loader from '../../assets/images/831.svg'

function CurrentData(props) {
  return (
    <>
      {
        ((props.covidData.loading) || (props.covidData.loading == null)) ? (<figure><img src={loader} alt="Loader"></img></figure>) : (
          <div className="body-info">
            <h2>Current Data for {props.covidData.data.name}</h2>  
            <div className="current-data">
              <div className="today">
                <h3>Today</h3>
                <p><span>Deaths: </span>{props.covidData.data.today.deaths}</p>
                <p><span>Confirmed: </span>{props.covidData.data.today.confirmed}</p>
              </div>
              <div className="overall">
                <h3>Overall</h3>
                <p><span>Deaths: </span>{props.covidData.data.latest_data.deaths}</p>
                <p><span>Confirmed: </span>{props.covidData.data.latest_data.confirmed}</p>
                <p><span>Recovered: </span>{props.covidData.data.latest_data.recovered}</p>
              </div>
            </div>
          </div>
        )
      }
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    covidData: state.covidData
  }
}

export default connect(mapStateToProps)(CurrentData) 
