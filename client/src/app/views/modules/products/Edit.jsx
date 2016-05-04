import React from 'react';
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import Toolbar from 'material-ui/Toolbar'
import ToolbarGroup from 'material-ui/Toolbar/ToolbarGroup'
import ContentAddCircle from 'material-ui/svg-icons/content/add-circle'
import ContentClear from 'material-ui/svg-icons/content/clear'

import FlowChart from '../../components/FlowChart.jsx'
import callApi from '../../../middlewares/api'
import store from '../../../store'

class EditProduct extends React.Component {

  constructor() {
    super()
    this.state = {
      id: '',
      service: '',
      wear: '',
      price: '',
      flow: [],
      showDelete: true,
    }
  }

  componentWillMount() {
    const item = store.selection
    if (item) {
      this.setState({
        id: item.id,
        service: item.service,
        wear: item.wear,
        price: item.price,
        flow: item.flow,
      })
    } else {
      window.location = '/#/products/list'
    }
  }

  submit() {
    const product = {
      service: this.state.service,
      wear: this.state.wear,
      price: this.state.price,
      flow: this.state.flow,
    }
    callApi(`products/${this.state.id}`, 'PUT', product).then((data) => {
      if (data) {
        window.location = '/#/products/list'
      }
    })
  }

  deleteItem() {
    callApi(`products/${this.state.id}`, 'DELETE').then((data) => {
      if (data) {
        window.location = '/#/products/list'
      }
    })
  }

  cancel() {
    window.location = '/#/products/list'
  }

  addStep() {
    const flow = this.state.flow
    const end = flow.pop()
    flow.push(this.refs.step.getValue())
    flow.push(end)

    this.setState({
      flow,
    })
  }

  clearFlow() {
    this.setState({
      flow: ['开始', '结束'],
    })
  }

  handleInputChange(field) {
    return function (event, value) {
      let o = {}
      o[field] = value
      this.setState(o)
    }
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
            hintText="服务项目"
            floatingLabelText="服务项目"
            value={this.state.service}
            onChange={this.handleInputChange('service').bind(this)}
          />
          <br />
          <TextField
            hintText="分类"
            floatingLabelText="分类"
            value={this.state.wear}
            ref="wear"
          />
          <br />
          <TextField
            hintText="价格"
            floatingLabelText="价格"
            value={this.state.price}
            ref="price"
          />
          <br />

          <FlowChart flow={this.state.flow}/>

          <br />
          <TextField
            hintText="流程"
            ref="step"
          />

          <ContentAddCircle
            onTouchTap={::this.addStep}
          />
          <ContentClear
            onTouchTap={::this.clearFlow}
          />
        </div>
        <br />
        <Toolbar style={actionBarStyle}>
          <ToolbarGroup float="left">
            <RaisedButton
              style={actionStyle}
              label="取消"
              onTouchTap={this.cancel}
            />
            <RaisedButton
              style={actionStyle}
              label="删除"
              secondary
              onTouchTap={::this.deleteItem}
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
export default EditProduct;

