import React from 'react';
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import Toolbar from 'material-ui/Toolbar'
import ToolbarGroup from 'material-ui/Toolbar/ToolbarGroup'

import callApi from '../../../middlewares/api'

class CreateService extends React.Component {
  submit() {
    const service = {
      name: this.refs.name.getValue(),
      flow: JSON.parse(this.refs.flow.getValue()),
    }
    callApi('services', 'POST', service).then((res) => {
      if (res) {
        window.location = '/#/services/list'
      }
    })
  }

  cancel() {
    window.location = '/#/services/list'
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
            hintText="名称"
            floatingLabelText="名称"
            ref="name"
          />
          <br />
          <TextField
            hintText="流程"
            floatingLabelText="流程"
            ref="flow"
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
              label="确认"
              style={actionStyle}
              onTouchTap={::this.submit}
              primary
            />
          </ToolbarGroup>
        </Toolbar>
      </div>
    )
  }
}
export default CreateService

