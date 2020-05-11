import React, { Component } from 'react';
import { CardList } from './Components/Card-List/Card-List.component';
import { SearchBox } from './Components/Search-Box/Search-Box.component';
import './App.css';

class App extends Component {

  constructor() {

    super();

    this.state = {
      monsters : [],
      searchField : ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({monsters: users}));
  }

  render() {

    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter( monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase()));

    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        <SearchBox placeholder='Search Avataar' handleChange={e => this.setState({searchField:e.target.value})} />
        <CardList monsters={ filteredMonsters } />
      </div>
    );
  }
}

export default App;
