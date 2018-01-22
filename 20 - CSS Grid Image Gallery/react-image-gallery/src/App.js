import React, { Component } from 'react';
import './App.css';
import randomImage from './images';
import getRandomNumber from './getRandomNumber';
import Modal from 'react-responsive-modal';
import 'react-responsive-modal/lib/react-responsive-modal.css';
import styled from 'styled-components';

const ImageWrapper = styled.div`
  grid-column: span ${props => props.spanColumn};
  grid-row: span ${props => props.spanRow};
  cursor: pointer;
  position: relative;
  display: grid;
  grid-template-columns: 1;
  grid-template-rows: 1;
`;

const Overlay = styled.div`
  background: rgba(0, 0, 0, 0.5);
  opacity: 0;
  color: white;
  display: grid;
  align-content: center;
  justify-content: center;
  grid-column: 1;
  grid-row: 1;
  transition: 0.5s ease;
  text-align: center;

  &:hover {
    opacity: 1;
  }
`;

class ImageViewer extends Component {
  state = {
    open: false,
  };

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  render() {
    const { open } = this.state;
    return [
      <ImageWrapper
        onClick={this.onOpenModal}
        spanColumn={this.props.spanColumn}
        spanRow={this.props.spanRow}
      >
        <img src={this.props.image} alt="galleryImg" />
        <Overlay>Click to view image!</Overlay>
      </ImageWrapper>,
      <Modal
        open={open}
        onClose={this.onCloseModal}
        little
        showCloseIcon={false}
      >
        <img src={this.props.image} alt="fullSreenImage" />
      </Modal>,
    ];
  }
}

class App extends Component {
  generateRandomImageGallery = numberOfImages => {
    const images = [];
    for (let index = 0; index < numberOfImages; index++) {
      images[index] = (
        <ImageViewer
          image={randomImage()}
          spanColumn={getRandomNumber(3)}
          spanRow={getRandomNumber(3)}
        />
      );
    }
    return images;
  };

  render() {
    const imageGallery = this.generateRandomImageGallery(150);
    return <div className="app">{imageGallery}</div>;
  }
}

export default App;
