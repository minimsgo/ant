import Sequelize from 'sequelize'

import dataSource from '../dataSource'
import uuid from '../miscs/uuid'

function barcode() {
  return Date.now().toString()
}

const OrderItem = dataSource.define('order_item', {
  id: uuid,
  barcode: {
    type: Sequelize.STRING,
    unique: true,
    defaultValue: barcode,
  },
})

export default OrderItem
