import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import randomImage from './images';
import { PortalWithState } from 'react-portal';
import getRandomNumber from './getRandomNumber';
import Modal from 'react-responsive-modal';
import 'react-responsive-modal/lib/react-responsive-modal.css';
import styled from 'styled-components';

const ImageWrapper = styled.div`
  grid-column: span ${props => props.spanColumn};
  grid-row: span ${props => props.spanRow};
  cursor: pointer;
  position: relative;
`;

// const Overlay = styled.div`
//   position: absolute;
//   top: 10px;
//   left: 10px;

//   padding: 5px;
//   background-color: white;
//   border: 2px solid red;

//   &:hover {
//     background: red;
//     border: 10px solid black;
//   }
// `;

const Overlay = styled.div`
  position: absolute;
  background: rgba(0, 0, 0, 0.5);
  opacity: 0;
  top: 0;
  left: 0;
  color: white;
  width: 100%;
  height: 100%;
  display: grid;
  align-content: center;
  justify-content: center;
  transition: 0.5s ease;

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
        <img src={this.props.image} />
        <Overlay>Click to view image!</Overlay>
      </ImageWrapper>,
      <Modal
        open={open}
        onClose={this.onCloseModal}
        little
        showCloseIcon={false}
      >
        <img src={this.props.image} />
      </Modal>,
    ];
    // return (
    //   <PortalWithState closeOnOutsideClick closeOnEsc>
    //     {({ openPortal, closePortal, portal }) => [
    // <div
    //   onClick={openPortal}
    //   style={{
    //     gridColumn: `span ${this.props.spanColumn}`,
    //     gridRow: `span ${this.props.spanRow}`,
    //   }}
    // >
    //   <img src={this.props.image} />
    // </div>,
    //       portal(
    //         <p>
    //           This is more advanced Portal. It handles its own state.{' '}
    //           <button onClick={closePortal}>Close me!</button>, hit ESC or click
    //           outside of me.
    //         </p>,
    //       ),
    //     ]}
    //   </PortalWithState>
    // );
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
