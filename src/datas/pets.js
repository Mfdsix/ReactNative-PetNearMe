const dogPhoto = require('../assets/images/dog.png');
const dog1Photo = require('../assets/images/dog1.png');
const dog2Photo = require('../assets/images/dog2.png');

const pets = [
  {
    name: 'Jackson',
    distance: '5km',
    photo: dogPhoto,
    favorite: true,
  },
  {
    name: 'Shelly',
    distance: '8km',
    photo: dog1Photo,
    favorite: false,
  },
  {
    name: 'Thiago',
    distance: '9km',
    photo: dog2Photo,
    favorite: true,
  },
];

export default pets;
