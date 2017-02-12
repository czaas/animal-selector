import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.section`
  z-index: 1;
  position: relative;
  height: 100%;
  min-height: 100vh;
  padding: 0 0 90px;

  background: #333;
`;

const ContainerText = styled.h1`
  text-align: center;
  position: absolute;
  top: 25%;
  color: #666;
  width: 100%;
`;

const ContainerCard = styled.div`
  width: 100%;
  max-width: 100%;

  overflow-y: scroll;
  height: 100%;

  background: #fefefe;
  
  position: absolute;
  left: 0;
  transform-style: preserve-3d;
  perspective: 1000px;
  transform: translate3d(0, 100%, 0);
`;

const ContainerCardInner = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  padding: 0 15px 90px;
  max-width: 750px;
  margin: 0 auto;
`;

const ContainerChild = ({ html, id }) => (
  <ContainerCard id={id}>
      <ContainerCardInner dangerouslySetInnerHTML={{ __html: html }} />
  </ContainerCard>
);

class AnimalCards extends Component {
  componentDidMount = () => {
    if (this.props.selectedAnimal !== '') {
      setTimeout(() => {
        this.cardFliesIn(document.getElementById(this.props.selectedAnimal));
      }, 225);
    }
  }

  componentWillReceiveProps = (nextProps) => {
    if (this.props.selectedAnimal !== nextProps.selectedAnimal) {
      if (this.props.selectedAnimal !== '') {
        this.cardFallsOut(document.getElementById(this.props.selectedAnimal));
      }

      if (nextProps.selectedAnimal !== '') {
        setTimeout(() => {
          this.cardFliesIn(document.getElementById(nextProps.selectedAnimal));
        }, 125);
      }
    }
  }

  cardFliesIn = (element) => {
    element.style['transform'] = 'translate3d(0, -100%, 0)';
    element.style['transition'] = 'transform 195ms cubic-bezier(0.0, 0.0, 0.2, 1)';
    element.style['transform'] = 'translate3d(0, 0, 0)';
  }

  cardFallsOut = (element) => {
    element.style['transition'] = 'transform 225ms cubic-bezier(0.4, 0.0, 1, 1), opacity 200ms ease-out';
    element.style['transform'] = 'translate3d(100%, 0, 0)';
    element.style['opacity'] = '0';

    setTimeout(() => {
      element.style['transition'] = '';
      element.style['transform'] = '';
      element.style['opacity'] = '';
    }, 300);
  }

  render() {
    let animals = this.props.animals.map((animal, i) => {
      return <ContainerChild html={animal.content} id={animal.name} key={`animal-card-${i}`} />
    });

    return (
      <Container>
        <ContainerText>Select an animal below</ContainerText>
        {animals}
      </Container>
    );
  }
}

export default AnimalCards;