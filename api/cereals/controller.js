const cereals = [{
  id: 1,
  name: 'Tur',
  quantity: 50,
  image: 'tur'
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

const setCereals = (req, res) => {
  if (req) {
    console.log(req.params);
    cereals[0].quantity = (parseInt(req.params.tur) / 4095) * 100;
    return res.status(200).json(cereals);
  } else {
    return cereals;
  }
}

const setCerealName = (req, res) => {
  if (req) {
    cereals[req.params.id].name = req.params.name;
    return res.status(200).json(cereals);
  } else {
    return cereals;
  }
}

const addCereal = (req, res) => {
  if (req) {
    cereals.puch({
      id: cereals.length - 1,
      name: req.params.name,
      quantity: 0,
      image: req.params.name
    });
    return res.status(200).json(cereals);
  } else {
    return cereals;
  }
}

const removeCereal = (req, res) => {
  if (req) {
    cereals.splice(req.params.id, 1);
    return res.status(200).json(cereals);
  } else {
    return cereals;
  }
}

module.exports = {
  getCereals: getCereals,
  getImage: getImage,
  setCereals: setCereals,
  setCerealName: setCerealName,
  addCereal: addCereal,
  removeCereal: removeCereal
};
