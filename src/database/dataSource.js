import Sequelize from 'sequelize'

const dataSource = new Sequelize(
  'postgres://ant:@localhost:5432/ant',
  {
    pool: {
      max: 5,
      min: 0,
      idle: 10000,
    },
    define: {
      timestamps: false,
    },
  }
)

export default dataSource