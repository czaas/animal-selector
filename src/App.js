import React, { Component } from 'react';
import AnimalData from './data';

import AnimalSelector from './components/AnimalSelector';
import AnimalCards from './components/AnimalCards';

class App extends Component {

  state = {
    selectedAnimal: '',
  }

  changeSelectedAnimal = (name) => {
    let selectedName = name;

    if (this.state.selectedAnimal === name) {
      selectedName = '';
    }

    this.setState({
      selectedAnimal: selectedName,
    });
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