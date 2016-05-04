import React from 'react'
import DataTable from '../../components/DataTable/DataTable.jsx'

import callApi from '../../../middlewares/api'

import schema from './schema'
import store from '../../../store'

export default class ProductList extends React.Component {

  constructor() {
    super()
    this.state = {
      items: [] 
    }
  }

  componentWillMount() {
    callApi('orders', 'GET').then((data) => {
      this.setState({
        items: data,
      })
    })
  }

  search(query) {
    callApi(`orders?q=${query}`, 'GET').then((data) => {
      this.setState({
        items: data,
      })
    })
  }

  create() {
    window.location = '/#/orders/create'
  }

  render() {
    const dataTable =
      <DataTable
        schema={schema}
        items={this.state.items}
        create={this.create}
        search={::this.search}
        edit={()=>{}}
      />

    return dataTable
  }
}
