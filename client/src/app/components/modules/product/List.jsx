import React from 'react';
import Table from 'material-ui/Table/Table';
import TableHeaderColumn from 'material-ui/Table/TableHeaderColumn';
import TableRow from 'material-ui/Table/TableRow';
import TableHeader from 'material-ui/Table/TableHeader';
import TableRowColumn from 'material-ui/Table/TableRowColumn';
import TableBody from 'material-ui/Table/TableBody';

import Toolbar from 'material-ui/Toolbar'
import ToolbarGroup from 'material-ui/Toolbar/ToolbarGroup'

import RaisedButton from 'material-ui/RaisedButton'

import {fetchProducts} from '../../../actions/products'
import store from '../../../store'

export default class ProductList extends React.Component {

  constructor() {
    super()
    this.state = {
      products: [],
    }
  }

  onFetchAllSuccess() {
    this.setState({
      products: store.getState().productsReducer,
    })
  }

  async componentWillMount() {
    store.subscribe(::this.onFetchAllSuccess)
    const action = await fetchProducts()
    store.dispatch(action)
  }

  handleRowSelected(selectedRows) {
    const selectedProduct = this.state.products[selectedRows[0]]
    store.dispatch({
      type: 'SELECTED',
      product: selectedProduct,
    })
    window.location = '/#/product/detail'
  }

  render() {

    function createRows(item) {
      return (
        <TableRow key={item.id}>
          <TableRowColumn>{item.service}</TableRowColumn>
          <TableRowColumn>{item.target}</TableRowColumn>
          <TableRowColumn>{item.price}</TableRowColumn>
        </TableRow>
      )
    }

    return (
      <div>
        <Toolbar style={{backgroundColor: 'white'}}>
          <ToolbarGroup />
          <ToolbarGroup float="right">
            <RaisedButton
              label="新建服务项目"
              style={{marginRight: -24}}
              primary
            />
          </ToolbarGroup>
        </Toolbar>
        <div>
          <Table onRowSelection={::this.handleRowSelected}>
            <TableHeader>
              <TableRow>
                <TableHeaderColumn>服务项目</TableHeaderColumn>
                <TableHeaderColumn>类别</TableHeaderColumn>
                <TableHeaderColumn>价格</TableHeaderColumn>
              </TableRow>
            </TableHeader>
            <TableBody>
              {this.state.products.map(createRows)}
            </TableBody>
          </Table>
        </div>
      </div>
    );
  }
}

