const cereals = [{
  id: 1,
  name: 'Tur',
  quantity: 50,
  image: 'tur'
}, {
  id: 2,
  name: 'Masoor',
  quantity: 70,
  image: 'masoor'
}]
var path = require('path');

const getImage = (req, res) => {
  res.sendFile(path.resolve('assets/' + req.params.img + '.png'));
};

const getCereals = (req, res) => {
  if (req) {
    return res.status(200).json(cereals);
  } else {
    return cereals;
  }
}

module.exports = {
  getCereals: getCereals,
  getImage: getImage
};
