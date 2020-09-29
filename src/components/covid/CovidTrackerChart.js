import React from 'react'
import{ connect } from 'react-redux'
import loader from '../../assets/images/831.svg'
import { Line } from 'react-chartjs-2'

function CovidTrackerChart(props) {
  let data;
  if ((props.covidData.loading === false) && (props.covidData.loading != null)) {
    let dates = props.covidData.data.timeline.map(timeline => timeline.date).reverse()
    let deaths = props.covidData.data.timeline.map(timeline  => timeline.deaths).reverse()
    let confirmed = props.covidData.data.timeline.map(timeline  => timeline.confirmed).reverse()
    let recovered = props.covidData.data.timeline.map(timeline  => timeline.recovered).reverse()
    let active = props.covidData.data.timeline.map(timeline  => timeline.active).reverse()

    data = {
      labels: dates,
      datasets: [
        {
          label: 'Deaths over a period',
          data: deaths
        },
        {
          label: 'Confirmed over a period',
          data: confirmed
        },
        {
          label: 'Recovered over a period',
          data: recovered
        },
        {
          label: 'Active over a period',
          data: active
        }
      ]
    }
  }
 

  return (
    <>
      {
        ((props.covidData.loading) || (props.covidData.loading == null)) ? (<figure><img src={loader} alt="Loader"></img></figure>) : (
          <div className="chart"><Line data={data} /></div>
        )
      }
    </>
  )
}

const mapStateToProps = state => {
  return {
    covidData: state.covidData
  }
}

export default connect(mapStateToProps)(CovidTrackerChart) 
