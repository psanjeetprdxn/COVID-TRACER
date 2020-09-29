import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchCovidData } from '../../redux'

class CountrySelectorContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      country: 'IN'
    }

    this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({country: event.target.value})
    this.props.fetchCovidData(event.target.value)
  }

  componentDidMount() {
    if (this.props.covidData.data.length < 1) {
      this.props.fetchCovidData(this.state.country)
    }
  }

  render() {
    let countries = this.props.countries.countries
    let options = Object.keys(countries).map((key, index) => {
      return <option value={key} key={key}>{countries[key] }</option>
    });

    return (
      <div className="select-form">
        <label>
          Country:
        </label>
        <select value={this.state.country} onChange={this.handleChange}>
          {options}
        </select>
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    countries: state.countries,
    covidData: state.covidData
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchCovidData: (id) => dispatch(fetchCovidData(id))
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CountrySelectorContainer)
