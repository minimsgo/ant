import React from 'react';
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import Toolbar from 'material-ui/Toolbar'
import ToolbarGroup from 'material-ui/Toolbar/ToolbarGroup'

import store from '../../../store'

class ProductDetail extends React.Component {

  constructor() {
    super()
    this.state = {
      product: {},
    }
  }

  handleCancel() {
    window.location = '/#/product'
  }

  handleConfirm() {
    // createOrder(this.state.product);
  }
  
  componentWillMount() {
    this.setState({
      product: store.getState().selectedProduct,
    }) 
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
            hintText="请输入服务项目名称"
            floatingLabelText="服务项目"
            value={this.state.product.service}
          />
          <br />
          <TextField
            hintText="请输入分类"
            floatingLabelText="分类"
            value={this.state.product.target}
          />
          <br />
          <TextField
            hintText="请输入价格"
            floatingLabelText="价格"
            value={this.state.product.price}
          />
        </div>
        <br/>
        <Toolbar style={actionBarStyle}>
          <ToolbarGroup float="left">
            <RaisedButton
              style={actionStyle}
              label="取消"
              onClick={this.handleCancel}
            />
            <RaisedButton
              style={actionStyle}
              label="删除"
              secondary
              onClick={this.handleCancel}
            />
            <RaisedButton
              label="确认"
              style={actionStyle}
              onClick={this.handleConfirm}
              primary
            />
          </ToolbarGroup>
        </Toolbar>
      </div>
    );
  }
}

export default ProductDetail;
