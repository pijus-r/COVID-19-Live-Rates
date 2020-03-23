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
              <div class="col-sm-12 col-md-3">
                <div class="card">
                  <div class="card-header">
                    Total Rates Worldwide{" "}
                    <span class="badge badge-danger">Live</span>
                  </div>
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">
                      Cases <div class="blue">{track.cases}</div>
                    </li>
                    <li class="list-group-item">
                      Deaths <div class="red">{track.deaths}</div>
                    </li>
                    <li class="list-group-item">
                      Recovered <div class="green">{track.recovered}</div>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="col-sm-12 col-md-9">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">About this data</h5>
                    <h6 class="card-subtitle mb-2 text-muted">
                      It changes rapidly
                    </h6>
                    <p class="card-text">
                      This data changes rapidly, so what’s shown may be out of
                      date. Table totals may not always represent an accurate
                      sum. Information about reported cases is also available on
                      the{" "}
                      <a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/situation-reports">
                        World Health Organization
                      </a>{" "}
                      site.
                    </p>
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
