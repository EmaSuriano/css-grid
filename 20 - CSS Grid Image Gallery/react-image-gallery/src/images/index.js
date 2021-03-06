import image1 from './1.jpg';
import image2 from './2.jpg';
import image3 from './3.jpg';
import image4 from './4.jpg';
import image5 from './5.jpg';
import image6 from './6.jpg';
import image7 from './7.jpg';
import image8 from './8.jpg';
import image9 from './9.jpg';
import image10 from './10.jpg';
import image11 from './11.jpg';
import image12 from './12.jpg';
import getRandomNumber from '../getRandomNumber';

const imageMap = {
  1: image1,
  2: image2,
  3: image3,
  4: image4,
  5: image5,
  6: image6,
  7: image7,
  8: image8,
  9: image9,
  10: image10,
  11: image11,
  12: image12,
};

const getRandomImage = () =>
  imageMap[getRandomNumber(Object.keys(imageMap).length)];

export default getRandomImage;
