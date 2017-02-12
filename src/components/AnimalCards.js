import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.section`
  z-index: 1;
  position: relative;
  overflow: hidden;
  height: 100%;
`;

const ContainerInner = styled.div`
  display: flex;
  
  transition: all .25s ease-out;
  overflow: hidden;
  height: 100%;
`;

const ContainerCard = styled.div`
  width: 100%;
  max-width: 100%;

  overflow-y: scroll;
  position: relative;
  height: 100%;
`;

const ContainerCardInner = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  max-width: 720px;
  padding: 0 15px 90px;

  @media screen and (min-width: 720px) {
    left: 50%;
    transform: translateX(-50%);
  }
`;

const ContainerChild = ({ html }) => (
  <ContainerCard>
    <ContainerCardInner dangerouslySetInnerHTML={{ __html: html }} />
  </ContainerCard>
);

class AnimalCards extends Component {
  render() {
    let widthOfContainer = (this.props.animals.length * 100);
    let positionFromLeft = 0;

    let animals = this.props.animals.map((animal, i) => {

      if (animal.name === this.props.selectedAnimal) {
        positionFromLeft = (i / widthOfContainer) * 100;
      }

      return <ContainerChild html={animal.content} key={`animal-card-${i}`} />
    });

    return (
      <Container>
        <ContainerInner style={{width: widthOfContainer + '%', transform: `translate3d(-${ positionFromLeft * 100 }%, 0, 0)` }}>
          {animals}
        </ContainerInner>
      </Container>
    );
  }
}

export default AnimalCards;