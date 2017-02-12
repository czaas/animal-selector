import React, { Component } from 'react';
import AnimalData from './data';

import AnimalSelector from './components/AnimalSelector';
import AnimalCards from './components/AnimalCards';

class App extends Component {

  state = {
    selectedAnimal: '',
  }

  componentWillMount = () => {
    this.changeSelectedAnimal(AnimalData[0].name);
  }

  changeSelectedAnimal = (name) => {
    if (this.state.selectedAnimal !== name) {
      this.setState({
        selectedAnimal: name,
      });
    }
  }

  render() {
    return (
      <div className="App">
        <AnimalCards animals={AnimalData} selectedAnimal={this.state.selectedAnimal} />
        <AnimalSelector animals={AnimalData} selectedAnimal={this.state.selectedAnimal} changeSelectedAnimal={this.changeSelectedAnimal} />
      </div>
    );
  }
}

export default App;