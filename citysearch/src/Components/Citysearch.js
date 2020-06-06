import React, { Component } from "react";
//import './City.css';
import axios from "axios";
class Citysearch extends Component {
    constructor(props) {
      super(props);
      this.state = {
        city: [],
        cityName: "",
      };
      this.handleZipSearch = this.handleZipSearch.bind(this);
    }
  
    handleZipSearch(e) {
        let cityCap=e.target.value.toUpperCase();
      this.setState({ cityName: e.target.value });  
      const url = "http://ctp-zip-api.herokuapp.com/city/" + cityCap;
      axios
        .get(url)
        .then((response) => {
          const data = response.data;
          this.setState({ city: data });
        })
        .catch((err) =>{ console.log(err)
          this.setState({city:[]})
      });
    }
    render() {
      let display;
      if (this.state.city.length === 0) {
        display = <div class="err">Not Found</div>;
      } else {
        display = this.state.city.map((data, i) => (
          <div class="zipCodeofCity">
            <ul>
              <li  key={i}> {data}</li>
            </ul>
          </div>
        ));
      }
  
      return (
        <div>
          <h1>City Zip Code Search</h1>
          <div className="search">
            <label htmlFor="cityinput">Enter a City name: </label>
            <input
              type="text"
              pattern="[a-zA-Z ]*"
              name="name"
              placeholder={this.state.zipValue}
              onChange={this.handleZipSearch}>
              </input>
            <br />
            <br />
          </div>
          <div class="zipdata">{display}
          </div>
        </div>
      );
    }
  }
  
  export default Citysearch;