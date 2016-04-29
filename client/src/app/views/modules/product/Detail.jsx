import React from 'react';

import DataFrom from '../../components/DataForm/DataForm.jsx'
import schema from './schema'
import store from '../../../store'

class ProductDetail extends React.Component {

  constructor() {
    super()
    this.state = {
      product: {},
    }
  }
  onCancel() {
    window.location = '/#/product/list'
  }

  componentWillMount() {
    this.setState({
      product: store.getState().detail,
    })
  }
  render() {
    return <DataFrom
      schema={schema}
      item={this.state.product}
      showDeleteButton={true}
      onCancel={this.onCancel}
    />
  }
}

export default ProductDetail;
