import React, { Component } from "react";
import FilterResults from "react-filter-search";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

class Countries extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      value: ""
    };
  }
  componentWillMount() {
    fetch("https://coronavirus-19-api.herokuapp.com/countries")
      .then(response => response.json())
      .then(json => this.setState({ data: json }));
    setTimeout(() => this.componentWillMount(), 500);
  }
  handleChange = event => {
    const { value } = event.target;
    this.setState({ value });
  };
  render() {
    const { data, value } = this.state;
    return (
      <div class="container custom">
        <FilterResults
          value={value}
          data={data}
          renderResults={results => (
            <div class="card">
              <div class="card-header">
                <div class="row">
                  <div class="col-sm-12 col-md-4">
                      <InputGroup>
                        <FormControl
                          onChange={this.handleChange}
                          placeholder="Search by country"
                          value={value}
                        />
                      </InputGroup>
                </div>                </div>

              </div>
              <div className="table-responsive">
                <table class="table table-bordered">
                  <thead class="thead-light">
                    <tr>
                      <th scope="col">Countries</th>
                      <th scope="col">Cases</th>
                      <th scope="col">Recovered</th>
                      <th scope="col">Deaths</th>
                      <th scope="col">Critical</th>
                      <th scope="col">Active</th>
                    </tr>
                  </thead>{" "}
                  <tbody>
                    {results.map(el => (
                      <>
                        <tr>
                          <td class="countries">{el.country}</td>

                          <td class="blue">
                            <div class="row">
                              <div class="col-sm-12"> Total: {el.cases} </div>
                              <div class="col-sm-12">
                                {" "}
                              <small>  Today: {el.todayCases}{" "}</small>
                              </div>{" "}
                            </div>
                          </td>

                          <td class="green">{el.recovered}</td>
                          <td class="red">
                            <div class="row">
                              <div class="col-sm-12"> Total: {el.deaths} </div>
                              <div class="col-sm-12">
                                {" "}
                                <small>  Today: {el.todayDeaths}{" "}</small>
                              </div>{" "}
                            </div>
                          </td>
                          <td class="violet">{el.critical}</td>
                          <td class="yellow">{el.active}</td>
                        </tr>
                      </>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        />
      </div>
    );
  }
}

export default Countries;
