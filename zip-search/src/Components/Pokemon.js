// import React, {Component} from "react";

// class ZipSearch extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             zipCode: "",
//             isLoaded = true,
//             items: [],
//             error:null
//         }
//     }
//     componentDidMount() {
//         fetch("http://ctp-zip-api.herokuapp.com/zip/:zipcode")
//         .then(res => res.json())
//         .then((result) => {
//             this.setState({
//                 isLoaded:true,
//                 items: result.items,
                

//             });
//         },
//         (error) => {
//             this.setState({
//                 isLoaded:true,
//                 error
//             });
//         }
        
//         )
        
//     }
//     render() {
//         const {error, isLoaded, items} = this.state;
//         if(error) {
//             return <div>Error: {error.message}</div>;
//         }
//         else if (!isLoaded) {
//             return <div>Loading...</div>;
//         }
//         else {
//             return (
//                 <ul>{items.map(item => (
//                     <li key = {item.name}>
//                         {item.name}{}
//                     </li></ul>
//             )
//         }
//         }


//         return (
//             <div>
//                 <h1>{this.props.name}</h1>
//             </div>
//             <div>
//                 <input type = "text" ></input>
//             </div>
//         )
//     }
// }
import React, { Component } from "react";
import axios from "axios";

class Pokemon extends Component {
  constructor(props) {
    super(props);
    this.state = {zipCode: "" };
  }

  componentDidMount() {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/" + this.props.name)
      .then((response) => {
        const data = response.data;

        const newPokemonObj = {
          name: data.name,
          imageUrl: data.sprites.front_default,
        };

        this.setState({ pokemon: newPokemonObj });
      })
      .catch((err) => console.log(err));
  }

  render() {
    let display;
    if (!this.state.pokemon) {
      display = <p>Loading...</p>;
    } else {
      display = (
        <>
          <img
            src={this.state.pokemon.imageUrl}
            alt={this.state.pokemon.name}
          />
          <ul>
            <li>{this.state.pokemon.name} </li>
          </ul>
        </>
      );
    }

    return <div className="pokemon">{display}</div>;
  }
}

export default Pokemon;
