/* eslint-disable arrow-body-style */
/* eslint-disable no-unused-vars */

'use-strict';

module.exports = {
  // eslint-disable-next-line brace-style
  up: async (queryInterface, _Sequelize) => { return queryInterface.bulkInsert('cabbooks', [
    {
      source: 'Najafgarh',
      destination: 'Dwarka'
    },
    {
      source: 'Ber sarai',
      destination: 'Hauz khash'
    },
    {
      source: 'Dwarka',
      destination: 'Saket'
    },
    {
      source: 'Dwarka sec 9',
      destination: 'Nawada'
    },
    {
      source: 'Janakpuri East',
      destination: 'Janakpuri West'
    },
    {
      source: 'Shadipur',
      destination: 'Karolbag'
    },
    {
      source: 'Uttam nagar',
      destination: 'Rajiv chauk'
    },
    {
      source: 'Laxminagar',
      destination: 'Yamuna bank'
    },

  ]);
  },

  down: async (queryInterface, _Sequelize) => {
    return queryInterface.bulkDelete('cabbooks', {}, null);
  }
};
