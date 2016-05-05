import Sequelize from 'sequelize'

import dataSource from '../dataSource'
import uuid from '../miscs/uuid'

const Customer = dataSource.define('customer', {
  id: uuid,
  name: Sequelize.STRING,
  tel: Sequelize.STRING,
})

export default Customer