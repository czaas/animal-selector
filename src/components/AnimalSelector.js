import React, { Component } from 'react';
import styled from 'styled-components';

const ToolBar = styled.div`
  width: 100%;
  max-width: 100%;

  overflow: scroll;
  z-index: 10;
  background: rgba(255,255,255,1);

  position: fixed;
  bottom: 0;
  padding: 10px 0 0;

  border-top: 1px solid #eee;
  box-shadow: 1px 4px 20px 0 rgba(0,0,0,.4);
`;

const ToolBarInner = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 0 0 0 15px;
  margin: 0 auto;
`;


const ToolBarAnimal = styled.div`
  flex: 0 0 50px;
  margin-right: 15px;
  text-align: center;
`;

const ToolBarAnimalImg = styled.img`
  display: block;
  border-radius: 50%;
  margin: 0 auto 5px;
  border: 2px solid transparent;

  transition: all .2s ease-out;
`;

const ToolBarAnimalName = styled.div`
  margin: 0 0 5px;
  font-size: 1.4rem;
  opacity: .8;
`;

const AnimalSelectorAnimal = ({ name, thumbnail, isSelected = false, changeSelectedAnimal }) => (
  <ToolBarAnimal onClick={changeSelectedAnimal.bind(this, name)}>
    <ToolBarAnimalImg src={thumbnail} style={(isSelected) ? { border: '2px solid #000' } : {}} />
    <ToolBarAnimalName>{name}</ToolBarAnimalName>
  </ToolBarAnimal>
);

class AnimalSelector extends Component {
  render() {
    let animals = this.props.animals.map((animal, i) => {
      let isSelected = this.props.selectedAnimal === animal.name;
      return (
        <AnimalSelectorAnimal 
          name={animal.name} 
          isSelected={isSelected} 
          thumbnail={animal.thumbnail} 
          changeSelectedAnimal={this.props.changeSelectedAnimal}
          key={`animal-selector-${ i }`} 
        />
      );
    });
    return (
      <ToolBar>
        <ToolBarInner style={{ width: (animals.length * 75) }}>
          {animals}
        </ToolBarInner>
      </ToolBar>
    );
  }
}

export default AnimalSelector;