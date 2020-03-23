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
                    <Form>
                      <InputGroup>
                        <FormControl
                          type="search"
                          onChange={this.handleChange}
                          name="search"
                          placeholder="Search by country"
                          value={value}
                        />
                      </InputGroup>
                    </Form>
                  </div>
                </div>
              </div>
              <div className="table-responsive">
                <table class="table">
                  <thead class="thead-light">
                    <tr>
                      <th scope="col">Countries</th>
                      <th scope="col">Cases</th>
                      <th scope="col">Recovered</th>
                      <th scope="col">Deaths</th>
                      <th scope="col">Critical</th>
                      <th scope="col">Active</th>
                      <th scope="col">Cases per 1 Million</th>
                    </tr>
                  </thead>{" "}
                  <tbody>
                    {results.map(el => (
                      <>
                        <tr>
                          <td>{el.country}</td>

                          <td>
                            <div class="row">
                              <div class="col-sm-12"> Total: {el.cases} </div>
                              <div class="col-sm-12">
                                {" "}
                                Today: {el.todayCases}{" "}
                              </div>{" "}
                            </div>
                          </td>

                          <td>{el.recovered}</td>
                          <td>
                            <div class="row">
                              <div class="col-sm-12"> Total: {el.deaths} </div>
                              <div class="col-sm-12">
                                {" "}
                                Today: {el.todayDeaths}{" "}
                              </div>{" "}
                            </div>
                          </td>
                          <td>{el.critical}</td>
                          <td>{el.active}</td>
                          <td>{el.casesPerOneMillion}</td>
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
