import React from 'react';

import DataFrom from '../../components/DataForm/DataForm.jsx'
import schema from './schema'
import store from '../../../store'

class ProductCreate extends React.Component {

  constructor() {
    super()
    this.state = {
      product: {},
    }
  }
  onCancel() {
    window.location = '/#/product/list'
  }
 
  onSubmit(item) {
    console.log(item)
  }

  render() {
    return <DataFrom
      schema={schema}
      item={this.state.product}
      showDeleteButton={false}
      onCancel={this.onCancel}
      onSubmit={this.onSubmit}
    />
  }
}

export default ProductCreate;
