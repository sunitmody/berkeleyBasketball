const model = require('../model/index.js');

module.exports = {
  post: (req, res) => {

  },
  get: (req, res) => {
    let { content } = req.body;
    console.log('controller:', content);
    let response = model.get(content);
    res.status(200).send(response);
  },
  put: (req, res) => {

  },
  delete: (req, res) => {

  }
}