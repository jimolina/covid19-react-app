import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function Country({ match }) {
    useEffect(() => {
        fetchItem()
        // console.log("HERE: ", match)
    }, [])
    
    const [item, setItem] = useState({
        latest_data: {},
        today: {}
    })

    const fetchItem = async () => {
        const fetchItem = await fetch(
            `https://corona-api.com/countries/${
                match.params.id
            }`
        );

        const item = await fetchItem.json();
        // console.log("DATA: ", item.data);
        setItem(item.data)
    }

    return (
        <div className="container-fluid mb-5 country__detail">
            <h1 className="my-5 text-center text-uppercase">{item.name}</h1>
            <div className="container my-4">
                <form action="">
                    <div className="row">
                        <div className="col-6">
                            <Link to="/">
                                <button className="btn btn-outline-info">Back to Dashboard</button>
                            </Link>
                        </div>
                        <div className="col-6 text-right">
                            <select name="country" id="country" className="form-control d-none">
                                <option value="usa">USA</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                    </div>
                </form>
            </div>
            <div className="container cases__block">
                <div className="row mt-5 pb-3">
                    <div className="col">
                        <div className="cases__confirmed card bg-light text-center">
                            <p className="cases__title">Confirmed Cases</p>
                            <h2>{item.latest_data.confirmed}</h2>
                        </div>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-12 col-md-6 col-lg-3 mb-4 mb-lg-0">
                        <div className="cases__active card text-center">
                            <p className="cases__title">New Cases</p>
                            <h2>{item.today.confirmed}</h2>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3 mb-4 mb-lg-0">
                        <div className="cases__recovered card text-center">
                            <p className="cases__title">Recovered</p>
                            <h2>{item.latest_data.recovered}</h2>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3 mb-4 mb-md-0">
                        <div className="cases__critical card text-center">
                            <p className="cases__title">Critical</p>
                            <h2>{item.latest_data.critical}</h2>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                        <div className="cases__deaths card text-center">
                            <p className="cases__title">Deaths</p>
                            <h2>{item.latest_data.deaths}</h2>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Country