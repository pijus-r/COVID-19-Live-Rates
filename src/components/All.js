import React, { Component } from "react";
import axios from "axios";

export default class All extends Component {
  state = { track: null };

  async componentDidMount() {
    axios
      .get(`https://coronavirus-19-api.herokuapp.com/all`)
      .then(response => this.setState({ track: response.data }))
      .catch(function(error) {
        console.log("Fetch error: " + error.message);
      });
    setTimeout(() => this.componentDidMount(), 500);
  }

  render() {
    const track = this.state.track;
    if (track === null) {
      return (
        <div class="text-center">
          <div class="spinner-grow" role="status">
            <span class="sr-only">Loading</span>
          </div>
        </div>
      );
    }

    return (
      <div>
        <div class="jumbotron jumbotron-fluid">
          <div class="container">

            <div class="row">

              <div class="col-xs-12 col-sm-12 col-md-4">
              <h3 class="badge  badge-danger">Live</h3>
              <span class="badge">Total Rates Wordwide</span>

                <div class="card custom-card">
                    <ul class="list-group list-group-horizontal-lg">
                    <li class="list-group-item">
                    <h6>  Cases</h6>     <h6  class="blue">{track.cases}</h6>
                    </li>
                    <li class="list-group-item">
                      <h6>     Deaths</h6> <h6  class="red">{track.deaths}</h6>
                    </li>
                    <li class="list-group-item">
                      <h6>   Recovered </h6> <h6   class="green">{track.recovered}</h6>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="col-xs-12 col-sm-12 col-md-8">
                <div class="card custom-card">
                  <div class="card-body">
                    <h5 class="card-title">About this data</h5>
                    <h6 class="card-subtitle mb-2 text-muted">
                      It doesn’t include all cases
                    </h6>
                    <p class="card-text">
                      Confirmed cases aren’t all cases. They only include people
                      who tested positive. Testing rules and availability vary
                      by country.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
