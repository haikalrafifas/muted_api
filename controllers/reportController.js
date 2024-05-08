const Report = require('../models/reportModel');

exports.index = (req, res) => {
  res.json([
    {
      'id': 1,
      'timeline': {
        'timestamp': '20240508T10:00:00Z',
        'noise_level': 100,
        'lat': -1.2345,
        'lng': 3.4567,
        'radius': 10,
      },
    },
    {
      'id': 2,
      'timeline': {}
    },
  ]);
};

exports.store = (req, res) => {
  // Add new report
};

exports.show = (req, res) => {
  // Add new report
};

exports.edit = (req, res) => {
  // Add new report
};

exports.destroy = (req, res) => {
  // Add new report
};
