import React from 'react'
import DataTable from '../../components/DataTable/DataTable.jsx'

import store from '../../../store'
import loadData from '../../../actions/loadData'
import schema from './schema'

export default class ProductList extends React.Component {

  constructor(){
    super()
    this.state = {
      items: [],
    }
  }
 
  onItemsReceived() {
    this.setState({
      items: store.getState().products,
    })
  }
 
  search(query) {
    const request = {
      endpoint: `products?q=${query}`,
      method: 'GET',
    }
    store.dispatch(loadData(request))
  }

  goDetail(item) {
    return function () {
      store.dispatch({
        type: 'DETAIL',
        product: item,
      })
      window.location = '/#/product/detail'
    }
  }
  
  componentWillMount() {
    store.subscribe(::this.onItemsReceived)
    const request = {
      endpoint: 'products',
      method: 'GET',
    }
    store.dispatch(loadData(request))
  }

  componentWillUnmount() {
    const unsubscribe = store.subscribe(() => null)
    unsubscribe()
  }

  render() {
    const newItem = {
      label: '新建',
      action() { window.location = '/#/product/create' },
    }

    const dataTable =
      <DataTable
        schema={schema}
        items={this.state.items}
        newItem={newItem}
        search={this.search}
        goDetail={this.goDetail}
      />
    
    return dataTable
  }
}
