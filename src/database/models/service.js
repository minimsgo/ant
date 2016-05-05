import Sequelize from 'sequelize'

import dataSource from '../dataSource'
import uuid from '../miscs/uuid'

const Service = dataSource.define('service', {
  id: uuid,
  name: {
    type: Sequelize.STRING,
    unique: true,
  },
  flow: {
    type: Sequelize.JSON,
    defaultValue: [],
  },
})

export default Service
