/* eslint-disable prettier/prettier */
const db = require('../models');

module.exports = {
  get: (request, response) => {
    db.SavedDate.findAll({
      where: {
        user_id: request.params.id,
      },
    }).then((savedDates) => {
      response.json(savedDates);
    });
  },

  create: (request, response) => {
    db.SavedDate
      .create(request.body)
      .then((dbModel) => response.json(dbModel))
      .catch((err) => response.status(422).json(err));
  },

  delete: (request, response) => {
    const { id } = request.params;
    db.SavedDate
      .destroy({
        where: { id },
      })
      .then((deletedDate) => {
        response.json(deletedDate);
      })
      .catch((err) => response.status(422).json(err));
  },
};
