import React,{Component} from 'react';
import {Search} from './Search';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      current: [],
      location: [
        "Durban,SA",
        "Cape Town,SA", 
        "PE,SA", 
        "Johannesburg,SA", 
        "Pretoria,SA", 
        "Delhi,India", 
        "Gujarat,India", 
        "Big Ben,UK", 
        "California,USA", 
        "London,UK"
      ]
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
  }
  handleChange(e){
    
    let currentList = [];
    let newList = [];

    if (e.target.value !== "") {
      currentList = this.state.location;
      newList = currentList.filter(item => {
        const lc = item.toLowerCase();
        const filter = e.target.value.toLowerCase();
        return lc.includes(filter);
      })
    }
    this.setState({
      current: newList
    })
    
  }

  render(){
    return (
      <div className="App container">
        <h1>Search Branch Location</h1>
        <Search onSubmit={this.handleSubmit} onChange={this.handleChange}/>
        <div id="drop">
          <ul id="lists">
            {this.state.current.map((x) => (
              <li key={x}>{x}</li>
          ))}
          </ul>
        </div>
      </div>
    )
  }
}



export default App;