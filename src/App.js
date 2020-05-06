import React from 'react';
import CardsList from './CardsList';
import SearchBox from './SearchBox';
import Scroll from './Scroll';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchField: ''

    }
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(users => this.setState({
      robots: users
    }))
  }

  onSearchFieldChange = (event) => {
    this.setState({searchField: event.target.value})
  }

  render() {
    const { robots, searchField } = this.state;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase())
    })
    return(
      <div className="tc">
        <h1 className="ma4 f2">RoboFriends</h1>
        <SearchBox onSearchFieldChange={this.onSearchFieldChange}/>

        <Scroll>
          <CardsList robots={filteredRobots} />
        </Scroll>

      </div>
    );
  }
}


export default App;
