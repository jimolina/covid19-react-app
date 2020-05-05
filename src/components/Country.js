import React from "react";
import { Link } from "react-router-dom";

import Chart from "./Chart";

class Country extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      countryId: props.match.params.id,
      country: [],
      timelineCountries: [],
      lastUpdate: [],
      totalConfirmed: 0,
      totalActive: 0,
      totalRecovered: 0,
      totalCritical: 0,
      totalDeaths: 0,
    };
  }

  componentDidMount() {
    fetch(`https://corona-api.com/countries/${this.state.countryId}`)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          country: data.data,
        });
        // console.log("DATA 0: ", this.state.country);

        let tLine = this.state.country.timeline
          ? this.state.country.timeline.reverse()
          : {};

        this.setState(() => {
          let tCon = this.state.country.latest_data.confirmed;
          let tAct = this.state.country.today.confirmed;
          let tRec = this.state.country.latest_data.recovered;
          let tCri = this.state.country.latest_data.critical;
          let tD =
            this.state.country.latest_data.deaths +
            this.state.country.today.deaths;
          let lastUp = new Date(this.state.country.updated_at);
          let lastUpTime = `${lastUp.toLocaleDateString()} - ${lastUp.toLocaleTimeString()}`;

          return {
            timelineCountries: tLine,
            totalConfirmed: tCon.toLocaleString(),
            totalActive: tAct.toLocaleString(),
            totalRecovered: tRec.toLocaleString(),
            totalCritical: tCri.toLocaleString(),
            totalDeaths: tD.toLocaleString(),
            lastUpdate: lastUpTime,
          };
        });
      });
  }

  render() {
    return (
      <div className="container-fluid mb-5 country__detail">
        <h1 className="mt-5 text-center text-uppercase">
          {this.state.country.name}
        </h1>
        <p className="text-center">Last Update: {this.state.lastUpdate}</p>
        <div className="container my-4">
          <form action="">
            <div className="row">
              <div className="col-6">
                <Link to="/">
                  <button className="btn btn-outline-info">
                    Back to Dashboard
                  </button>
                </Link>
              </div>
              <div className="col-6 text-right">
                <select
                  name="country"
                  id="country"
                  className="form-control d-none"
                >
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
        <h2 className="container mt-5">Timeline</h2>
        <div className="timeline-container container">
          {this.state.timelineCountries.length > 0 ? (
            <Chart data={this.state.timelineCountries} />
          ) : (
            <h3 className="nodata text-center">No data to display.</h3>
          )}
        </div>
      </div>
    );
  }
}

export default Country;
