import React from 'react';
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import Toolbar from 'material-ui/Toolbar'
import ToolbarGroup from 'material-ui/Toolbar/ToolbarGroup'
import Table from 'material-ui/Table/Table';
import TableHeaderColumn from 'material-ui/Table/TableHeaderColumn';
import TableRow from 'material-ui/Table/TableRow'
import TableHeader from 'material-ui/Table/TableHeader'
import TableRowColumn from 'material-ui/Table/TableRowColumn'
import TableBody from 'material-ui/Table/TableBody'
import TableFooter from 'material-ui/Table/TableFooter'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'

import lodash from 'lodash'

import callApi from '../../../middlewares/api'

class CreateOrder extends React.Component {
  
  constructor(){
    super()
    this.state = {
      products: [],
      items: [],
      currentItem: {},
    }
  }
  
  componentWillMount(){
    callApi('products', 'GET').then(data => {
      this.setState({
        products: data,
      })
    })
  }

  submit() {
    const order = {
      customer: {
        name: this.refs.customerName.getValue(),
        tel: this.refs.customerTel.getValue(),
      },
      amount: this.refs.amount.getValue(),
      items: this.state.items,
    }
    callApi('orders', 'POST', order).then((data) => {
      if (data) {
        window.location = '/#/orders/list'
      }
    })
  }

  cancel() {
    window.location = '/#/orders/list'
  }

  render() {
    const actionBarStyle = {
      backgroundColor: 'white',
    }
    const actionStyle = {
      marginLeft: -10,
    }
   
    return (
      <div>
        
        <div>
          <TextField
            hintText="客户姓名"
            floatingLabelText="客户姓名"
            ref="customerName"
          />
          <br />
          <TextField
            hintText="客户电话"
            floatingLabelText="客户电话"
            ref="customerTel"
          />
          <br />
          <TextField
            floatingLabelText="金额"
            disabled
            ref="amount"
            value={
              this.state.items.map(item => item.price)
              .reduce(lodash.add, 0)
            }
          />
          <br />
        </div>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHeaderColumn>衣物</TableHeaderColumn>
              <TableHeaderColumn>服务项目</TableHeaderColumn>
              <TableHeaderColumn>价格</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody>
            {
              this.state.items.map((item, index) => 
                <TableRow key={index}>
                  <TableRowColumn>
                    {item.wear} 
                  </TableRowColumn>
                  <TableRowColumn>
                    {item.service}
                  </TableRowColumn>
                  <TableRowColumn>
                    {item.price} 
                  </TableRowColumn>
                </TableRow>
              )
            }
            
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableRowColumn>
                <SelectField
                  value={this.state.currentItem.wear}
                  onChange={(event, index, value) => {
                    this.setState({
                      currentItem: {
                        wear: value,
                      },
                    }) 
                  }}
                > 
                  { this.state.products.map((item, index) => 
                    <MenuItem
                      key={index}
                      value={item.wear}
                      primaryText={item.wear}
                      
                    />
                  )}
                </SelectField>
              </TableRowColumn>
              <TableRowColumn>
                <SelectField
                  value={this.state.currentItem.service}
                  onChange={(event, index, value) => {
                    const wear = this.state.currentItem.wear
                    const price = this.state.products.filter(
                      (item) => item.service === value && item.wear === wear 
                    )[0].price
                    const currentItem = {
                      wear,
                      service:value,
                      price,
                    }
                    const items = this.state.items
                    items.push(currentItem)
                    this.setState({
                      currentItem: {},
                      items,
                    })
                  }}
                >
                  { this.state.products.filter(
                    (item) => item.wear === this.state.currentItem.wear
                  ).map((item, index) =>
                    <MenuItem
                      key={index}
                      value={item.service}
                      primaryText={item.service}
                    />
                  )}
                </SelectField>
              </TableRowColumn>
            </TableRow>
          </TableFooter>
        </Table>
        
        <br />
        
        <Toolbar style={actionBarStyle}>
          <ToolbarGroup float="left">
            <RaisedButton
              style={actionStyle}
              label="取消"
              onTouchTap={this.cancel}
            />
            <RaisedButton
              label="确认"
              style={actionStyle}
              onTouchTap={::this.submit}
              primary
            />
          </ToolbarGroup>
        </Toolbar>
        
      </div>
    );
  }
}
export default CreateOrder;

