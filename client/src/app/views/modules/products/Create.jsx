import React from 'react';
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import Toolbar from 'material-ui/Toolbar'
import ToolbarGroup from 'material-ui/Toolbar/ToolbarGroup'

import FlowChart from '../../components/FlowChart.jsx'
import callApi from '../../../middlewares/api'

class CreateProduct extends React.Component {
  
  constructor(){
    super()
    this.state = {
      flow: ['开始', '结束'],
      newStep: '',
      showDelete: false,
    }
  }

  submit() {
    const product = {
      service: this.refs.service.getValue(),
      wear: this.refs.wear.getValue(),
      price: this.refs.price.getValue(),
      flow: this.state.flow,
    }
    callApi('products', 'POST', product).then((data) => {
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
    flow.push(this.state.newStep)
    flow.push(end)
    
    this.setState({
      flow,
      newStep: '',
    })
  }

  handleNewStepInput(event, value){
    this.setState({
      newStep: value,
    })
  }

  clearFlow() {
    this.setState({
      flow: ['开始', '结束'],
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
            hintText="服务项目"
            floatingLabelText="服务项目"
            ref="service"
          />
          <br />
          <TextField
            hintText="衣物"
            floatingLabelText="衣物"
            ref="wear"
          />
          <br />
          <TextField
            hintText="价格"
            floatingLabelText="价格"
            ref="price"
          />
          <br />
          
          <FlowChart flow={this.state.flow} />
          
          <br />
          <TextField
            hintText="流程"
            value={this.state.newStep}
            onChange={::this.handleNewStepInput}
          />

          <RaisedButton
            label="添加"
            onTouchTap={::this.addStep}
          />
          <RaisedButton
            label="清除"
            secondary
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
              disabled={!this.props.showDeleteButton}
              onTouchTap={this.props.deleteItem}
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
export default CreateProduct;

