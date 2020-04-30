import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function Dashboard() {
    useEffect(() => {
        fetchData()
    }, [])

    const [countries, setCountries] = useState([])
    let lastUpdate = ""
    let totalConfirmed = 0
    let totalActive = 0
    let totalRecovered = 0
    let totalCritical = 0
    let totalDeaths = 0

    const fetchData = async () => {
        const data = await fetch(
            'https://corona-api.com/countries'
        )

        const countries = await data.json()
        // console.log("DATA: ", countries)
        setCountries(countries.data.sort( function(a, b){return b.latest_data.confirmed - a.latest_data.confirmed} ))
    }

    totalConfirmed = countries.reduce((prev, actual) => {
        return prev + actual.latest_data.confirmed;
    }, 0)

    totalActive = countries.reduce((prev, actual) => {
        return prev + actual.today.confirmed;
    }, 0)

    totalRecovered = countries.reduce((prev, actual) => {
        return prev + actual.latest_data.recovered;
    }, 0)

    totalCritical = countries.reduce((prev, actual) => {
        return prev + actual.latest_data.critical;
    }, 0)

    totalDeaths = countries.reduce((prev, actual) => {
        return prev + actual.today.deaths + actual.latest_data.deaths;
    }, 0)

    if (countries[0]) {
        lastUpdate = countries[0].updated_at
    }

    return (
        <div className="container-fluid dashboard__page">
            <h1 className="mt-5 text-center">Dashboard</h1>
            <p className="text-center">Last Update: {lastUpdate}</p>
            <div className="container cases__block">
                <div className="row mt-5 pb-3">
                    <div className="col">
                        <div className="cases__confirmed card bg-light text-center">
                            <p className="cases__title">Confirmed Cases</p>
                            <h2>{totalConfirmed.toLocaleString()}</h2>
                        </div>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-12 col-md-6 col-lg-3 mb-4 mb-lg-0">
                        <div className="cases__active card text-center">
                            <p className="cases__title">New Cases</p>
                            <h2>{totalActive.toLocaleString()}</h2>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3 mb-4 mb-lg-0">
                        <div className="cases__recovered card text-center">
                            <p className="cases__title">Recovered</p>
                            <h2>{totalRecovered.toLocaleString()}</h2>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3 mb-4 mb-md-0">
                        <div className="cases__critical card text-center">
                            <p className="cases__title">Critical</p>
                            <h2>{totalCritical.toLocaleString()}</h2>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                        <div className="cases__deaths card text-center">
                            <p className="cases__title">Deaths</p>
                            <h2>{totalDeaths.toLocaleString()}</h2>
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
                            {countries.map(country => (
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

export default Dashboard