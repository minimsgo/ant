import Sequelize from 'sequelize'

export default {
  type: Sequelize.UUID,
  primaryKey: true,
  defaultValue: Sequelize.UUIDV4(),
}
