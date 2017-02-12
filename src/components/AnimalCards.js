import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.section`
  z-index: 1;
  position: relative;
  overflow: hidden;

  padding-bottom: 90px;
`;

const ContainerInner = styled.div`
  display: flex;
  
  transition: all .25s ease-out;
  overflow: hidden;
`;

const ContainerCard = styled.div`
  width: 100%;
  max-width: 100%;

  overflow-x: scroll;
  padding: 0 15px;
`;

const ContainerChild = ({ html }) => (
  <ContainerCard>
    <span dangerouslySetInnerHTML={{ __html: html }} />
  </ContainerCard>
);

class AnimalCards extends Component {

  componentWillReceiveProps = (nextProps) => {
    if (this.props.selectedAnimal !== nextProps.selectedAnimal) {
      window.scrollTo(0,0);
    }
  }

  render() {
    let widthOfContainer = (this.props.animals.length * 100);
    let positionFromLeft = 0;

    let animals = this.props.animals.map((animal, i) => {

      if (animal.name === this.props.selectedAnimal) {
        positionFromLeft = ((i + 1) * 20) - 20;
      }

      return <ContainerChild html={animal.content} key={`animal-card-${i}`} />
    });

    return (
      <Container>
        <ContainerInner style={{width: widthOfContainer + '%', transform: `translate3d(-${ positionFromLeft }%, 0, 0)` }}>
          {animals}
        </ContainerInner>
      </Container>
    );
  }
}

export default AnimalCards;