import React from 'react';
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import Toolbar from 'material-ui/Toolbar'
import ToolbarGroup from 'material-ui/Toolbar/ToolbarGroup'

class DataForm extends React.Component {
  static propTypes = {
    schema: React.PropTypes.array,
    onCancel: React.PropTypes.func,
    onSubmit: React.PropTypes.func,
    item: React.PropTypes.object,
    showDeleteButton: React.PropTypes.bool,
  }

  constructor() {
    super()
    this.state = {
      item: {
      },
    }
  }

  componentWillMount(){
    this.setState({
      item: this.props.item,
    })
  }
  
  onSubmit(){
    console.log(this.state.item)
    // this.props.onSubmit(1)
  }
  
  onTextFieldChange(fieldName){
    return function (event, value) {
      const item = this.state.item
      item[fieldName] = value
      this.setState({
        item,
      })
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
          {this.props.schema.map(field =>
            <div key={field.id}>
              <TextField
                hintText={field.displayName}
                floatingLabelText={field.displayName}
                onChange={this.onTextFieldChange(field.name).bind(this)}
              />
              <br />
            </div>
          )}
        </div>
        <br/>
        <Toolbar style={actionBarStyle}>
          <ToolbarGroup float="left">
            <RaisedButton
              style={actionStyle}
              label="取消"
              onClick={this.props.onCancel}
            />
            <RaisedButton
              style={actionStyle}
              label="删除"
              disabled={!this.props.showDeleteButton}
              secondary
            />
            <RaisedButton
              label="确认"
              style={actionStyle}
              onClick={::this.onSubmit}
              primary
            />
          </ToolbarGroup>
        </Toolbar>
      </div>
    );
  }
}
export default DataForm;
