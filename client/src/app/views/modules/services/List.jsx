import React from 'react'
import DataTable from '../../components/DataTable/DataTable.jsx'
import callApi from '../../../middlewares/api'

import store from '../../../store'
import schema from './schema'

class ListServices extends React.Component {

  constructor() {
    super()
    this.state = {
      items: [],
    }
  }

  componentWillMount() {
    callApi('services', 'GET').then((items) => {
      this.handleReceiveItems(items)
    })
  }

  handleReceiveItems(data) {
    const formatItems = data.map((item) => {
      item.flow = JSON.stringify(item.flow)
      return item
    })
    this.setState({
      items: formatItems
    })
  }
  
  search(query) {
    callApi(`services?q=${query}`, 'GET').then((items) => {
      this.handleReceiveItems(items)
    })
  }

  edit(item) {
    return function () {
      store.selection = item
      window.location = '/#/services/edit'
    }
  }

  create() {
    window.location = '/#/services/create'
  }

  render() {
    const dataTable = (
      <DataTable
        schema={schema}
        items={this.state.items}
        create={this.create}
        search={::this.search}
        edit={this.edit}
      />)
    return dataTable
  }
}

export default ListServices
