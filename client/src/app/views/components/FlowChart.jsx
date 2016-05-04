import React from 'react'
import NavigationArrowDownward from 'material-ui/svg-icons/navigation/arrow-downward'
import RaisedButton from 'material-ui/RaisedButton'

class FlowChart extends React.Component {
  static propTypes = {
    flow: React.PropTypes.array,
  }

  render() {
    const arrowStyle = {
      marginLeft: 30,
    }
    return (
      <div>
        {this.props.flow.map((item, index) => {
          return index !== this.props.flow.length - 1 ?
            (<div key={index}>
              <div>
                <RaisedButton label={item} disabled/>
              </div>
                <div>
                <NavigationArrowDownward style={arrowStyle}/>
                </div>
            </div>) :
            (<div key={index}>
              <div>
                <RaisedButton label={item} disabled/>
              </div>
            </div>) 
        })}
      </div>
    )
  }
}

export default FlowChart