import Sequelize from 'sequelize'

import dataSource from '../dataSource'
import uuid from '../miscs/uuid'

const Work = dataSource.define('work', {
  id: uuid,
  // flow index
  step: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
  },
}, {
  timestamp: true,
})

export default Work
