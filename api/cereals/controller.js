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

const getImage = (req, res) => {
    res.sendFile('../../assets/' + req.query.img + '.png', { root: __dirname });
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
