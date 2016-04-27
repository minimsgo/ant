import Sequelize from 'sequelize'

const dataSource = new Sequelize(
  'ant', // database
  'ant', // username
  '', // password
  {
    host: 'localhost',
    dialect: 'postgresql',
    pool: {
      max: 5,
      min: 0,
      idle: 10000,
    },
  }
)

export default dataSource