import React, {Component} from 'react';
import CardList from './components/card-list/cardlist.component';
import SearchBox from './components/searchbox/search-box.component';
import "./App.css";
class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ""
    }
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => this.setState({monsters: users}))
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))

    return (
      <div className="container-fluid">
        <h1 className="main-title">Monster Rolodex</h1>
        <div className=" container input-field">
          <SearchBox
            placeholder="Search Monsters" 
            value={this.state.searchField} 
            onChange={(e) => this.setState({searchField: e.target.value})}
          />
        </div>
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;