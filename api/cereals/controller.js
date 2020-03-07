const cereals = [{
  id: 1,
  name: 'Tur',
  quantity: 50,
  image: ''
},]

const getCereals = (req, res) => {
  if (req) {
    return res.status(200).json(cereals);
  } else {
    return cereals;
  }
}

module.exports = {
  getCereals: getCereals
};
