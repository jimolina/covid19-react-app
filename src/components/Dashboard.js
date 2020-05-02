import React from 'react'
import { Link } from 'react-router-dom'

class Dashboard extends React.Component {
    constructor() {
        super()
        this.state = {
            setCountries: [],
            lastUpdate: "",
            totalConfirmed: 0,
            totalActive: 0, 
            totalRecovered: 0,
            totalCritical: 0,
            totalDeaths: 0
        }
    }

    componentDidMount() {
        fetch('https://corona-api.com/countries')
            .then(response => response.json( ))
            .then(data =>  {
                this.setState({
                    setCountries: data.data.sort( function(a, b){return b.latest_data.confirmed - a.latest_data.confirmed} )
                })
                
                this.setState(() => {
                    let tCon = this.state.setCountries.reduce((prev, actual) => {
                        return prev + actual.latest_data.confirmed;
                    }, 0)

                    let tAct = this.state.setCountries.reduce((prev, actual) => {
                        return prev + actual.today.confirmed;
                    }, 0)

                    let tRec = this.state.setCountries.reduce((prev, actual) => {
                        return prev + actual.latest_data.recovered;
                    }, 0)

                    let tCri = this.state.setCountries.reduce((prev, actual) => {
                        return prev + actual.latest_data.critical;
                    }, 0)

                    let tD = this.state.setCountries.reduce((prev, actual) => {
                        return prev + actual.today.deaths + actual.latest_data.deaths;;
                    }, 0)

                    let lastUp = new Date(this.state.setCountries[0].updated_at)
                    let lastUpTime = `${lastUp.toLocaleDateString()} - ${lastUp.toLocaleTimeString()}`

                    return {
                        totalConfirmed: tCon.toLocaleString(),
                        totalActive: tAct.toLocaleString(),
                        totalRecovered: tRec.toLocaleString(),
                        totalCritical: tCri.toLocaleString(),
                        totalDeaths: tD.toLocaleString(),
                        lastUpdate: lastUpTime
                    }
                })
            })
    }

    render() {
        return (
            <div className="container-fluid dashboard__page">
                <h1 className="mt-5 text-center">Dashboard</h1>
                <p className="text-center">Last Update: {this.state.lastUpdate}</p>
                <div className="container cases__block">
                    <div className="row mt-5 pb-3">
                        <div className="col">
                            <div className="cases__confirmed card bg-light text-center">
                                <p className="cases__title">Confirmed Cases</p>
                                <h2>{this.state.totalConfirmed}</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-12 col-md-6 col-lg-3 mb-4 mb-lg-0">
                            <div className="cases__active card text-center">
                                <p className="cases__title">New Cases</p>
                                <h2>{this.state.totalActive}</h2>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3 mb-4 mb-lg-0">
                            <div className="cases__recovered card text-center">
                                <p className="cases__title">Recovered</p>
                                <h2>{this.state.totalRecovered}</h2>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3 mb-4 mb-md-0">
                            <div className="cases__critical card text-center">
                                <p className="cases__title">Critical</p>
                                <h2>{this.state.totalCritical}</h2>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3">
                            <div className="cases__deaths card text-center">
                                <p className="cases__title">Deaths</p>
                                <h2>{this.state.totalDeaths}</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="data-grid container">
                    <div className="table-responsive-sm">
                        <table className="table table-sm table-bordered table-striped bg-light">
                            <caption>List of countries with COVID-19 cases</caption>
                            <thead>
                                <tr>
                                    <th>Country</th>
                                    <th>Total Cases</th>
                                    <th>New Cases</th>
                                    <th>Total Deaths</th>
                                    <th>New Deaths</th>
                                    <th>Total Recovery</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.setCountries.map(country => (
                                    <tr key={country.code}>
                                        <td className="data-grid--country">
                                            <Link to={`/country/${country.code}`}>
                                                {country.name}
                                            </Link>
                                        </td>
                                        <td className="data-grid--total">
                                            {country.latest_data.confirmed.toLocaleString()}
                                        </td>
                                        <td className="data-grid--new">
                                            {country.today.confirmed.toLocaleString()}
                                        </td>
                                        <td className="data-grid--deaths">
                                            {country.latest_data.deaths.toLocaleString()}
                                        </td>
                                        <td className="data-grid--new-deaths">
                                            {country.today.deaths.toLocaleString()}
                                        </td>
                                        <td className="data-grid--recovery">
                                            {country.latest_data.recovered.toLocaleString()}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard