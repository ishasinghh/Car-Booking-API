/* eslint-disable arrow-body-style */
/* eslint-disable no-unused-vars */

'use-strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [
      {
        fullName: 'Isha',
        email: 'isha12@gmail.com',
        password: 'cD45Bv'
      },
      {
        fullName: 'chander',
        email: 'chand34@gmail.com',
        password: 'cD4789'
      },
      {
        fullName: 'Amit',
        email: 'amit342@gmail.com',
        password: 'amjit345'
      },
      {
        fullName: 'Gaurav',
        email: 'gaurav567@gmail.com',
        password: 'gau675gh'
      },
      {
        fullName: 'Prince singh',
        email: 'prince678@gmail.com',
        password: 'princ456hh'
      },
      {
        fullName: 'Piyush',
        email: 'piyush7@gmail.com',
        password: 'pk78bhn'
      },
      {
        fullName: 'Aadi',
        email: 'aadi677@gmail.com',
        password: 'addi789n'
      },

    ]);
  },

  down: async (queryInterface, _Sequelize) => {
    return queryInterface.bulkDelete('users', {}, null);
  }
};
